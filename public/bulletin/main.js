i = 0;

$(function(){ 
   $.ajax({
      type: "GET",
      url: '//mmu-api.appspot.com/secure',
      jsonpCallback: "bulletin",
      dataType: "jsonp",
      jsonpCallback: "bulletin",
      cache: true,
      success: function(data) {
          datas = data;
          getprofile();
          parsejson();
          },  
      error: function(err) {
          window.location.replace("/bulletin/login.html");
          // window.location.replace("//mmu-api.appspot.com/login");
      }   
   });
});

'use strict';
var API_KEY = "AIzaSyBcTv77WDUy4iLrTBy7CvNyihHUldX_YYk";
var GCM_ENDPOINT = 'https://android.googleapis.com/gcm/send';

var curlCommandDiv = document.querySelector('.js-curl-command');
var isPushEnabled = false;

// This method handles the removal of subscriptionId
// in Chrome 44 by concatenating the subscription Id
// to the subscription endpoint
function endpointWorkaround(pushSubscription) {
  // Make sure we only mess with GCM
  if (pushSubscription.endpoint.indexOf('https://android.googleapis.com/gcm/send') !== 0) {
    return pushSubscription.endpoint;
  }

  var mergedEndpoint = pushSubscription.endpoint;
  // Chrome 42 + 43 will not have the subscriptionId attached
  // to the endpoint.
  if (pushSubscription.subscriptionId &&
    pushSubscription.endpoint.indexOf(pushSubscription.subscriptionId) === -1) {    
    // Handle version 42 where you have separate subId and Endpoint
    mergedEndpoint = pushSubscription.endpoint + '/' +
      pushSubscription.subscriptionId;
  }
  return mergedEndpoint;
}

function sendSubscriptionToServer(subscription) {
  // TODO: Send the subscription.endpoint
  // to your server and save it to send a
  // push message at a later date
  //
  // For compatibly of Chrome 43, get the endpoint via
  // endpointWorkaround(subscription)
  var mergedEndpoint = endpointWorkaround(subscription);

  // This is just for demo purposes / an easy to test by
  // generating the appropriate cURL command
  showCurlCommand(mergedEndpoint);
}

// NOTE: This code is only suitable for GCM endpoints,
// When another browser has a working version, alter
// this to send a PUSH request directly to the endpoint
function showCurlCommand(mergedEndpoint) {
  // The curl command to trigger a push message straight from GCM
  if (mergedEndpoint.indexOf(GCM_ENDPOINT) !== 0) {
    return;
  }

  var endpointSections = mergedEndpoint.split('/');
  var subscriptionId = endpointSections[endpointSections.length - 1];

  var curlCommand = 'curl --header "Authorization: key=' + API_KEY +
    '" --header Content-Type:"application/json" ' + GCM_ENDPOINT +
    ' -d "{\\"registration_ids\\":[\\"' + subscriptionId + '\\"]}"';

  curlCommandDiv.textContent = curlCommand;
}

function unsubscribe() {
  var pushButton = document.querySelector('.js-push-button');
  var pushNoti = document.getElementById("push-noti");
  pushButton.disabled = true;
  pushNoti.checked = false;
  curlCommandDiv.textContent = 'Enable Push Notification First.';

  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    // To unsubscribe from push messaging, you need get the
    // subcription object, which you can call unsubscribe() on.
    serviceWorkerRegistration.pushManager.getSubscription().then(
      function(pushSubscription) {
        // Check we have a subscription to unsubscribe
        if (!pushSubscription) {
          // No subscription object, so set the state
          // to allow the user to subscribe to push
          isPushEnabled = false;
          pushButton.disabled = false;
          pushNoti.checked = false;
          pushButton.textContent = 'Enable Notification';
          return;
        }

        // TODO: Make a request to your server to remove
        // the users data from your data store so you
        // don't attempt to send them push messages anymore

        // We have a subcription, so call unsubscribe on it
        pushSubscription.unsubscribe().then(function(successful) {
          pushButton.disabled = false;
          pushNoti.checked = false;
          pushButton.textContent = ' > Enable Notification';
          isPushEnabled = false;
        }).catch(function(e) {
          // We failed to unsubscribe, this can lead to
          // an unusual state, so may be best to remove
          // the subscription id from your data store and
          // inform the user that you disabled push

          pushButton.disabled = false;
          pushNoti.checked = false;
        });
      }).catch(function(e) {
      });
  });
}

function subscribe() {
  // Disable the button so it can't be changed while
  // we process the permission request
  var pushButton = document.querySelector('.js-push-button');
  var pushNoti = document.getElementById("push-noti");
  pushButton.disabled = true;
  pushNoti.checked = false;
  var haha="";

  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
      .then(function(subscription) {
        // The subscription was successful
        isPushEnabled = true;
        pushButton.textContent = 'Disable Notification';
        pushButton.disabled = false;
        pushNoti.checked = true;
        var haha = subscription.subscriptionId;

        $.ajax({
            url: 'https://pushnotificationbackend.appspot.com/subscribe?callback='+ haha,  //url: 'https://pushnotificationbackend.appspot.com/subscribe?callback='+haha, 
            method: 'GET',
            dataType: 'json',
            jsonpCallback: 'haha',
            cache: true,
            complete: function(xhr, Status) {
                if (xhr.status != 200){
                  Materialize.toast('Try Again.', 4000);
                  unsubscribe();
                }
                else{
                  Materialize.toast('Success', 4000);
                }
            } 
        });
       return sendSubscriptionToServer(subscription);

        // TODO: Send the subscription subscription.endpoint
        // to your server and save it to send a push message
        // at a later date
        
      })
      .catch(function(e) {
        if (Notification.permission === 'denied') {
          // The user denied the notification permission which
          // means we failed to subscribe and the user will need
          // to manually change the notification permission to
          // subscribe to push messages
          pushButton.disabled = true;
          pushNoti.checked = true;
          pushNoti.checked = false;
        } else {
          // A problem occurred with the subscription, this can
          // often be down to an issue or lack of the gcm_sender_id
          // and / or gcm_user_visible_only
          pushButton.disabled = false;
          pushNoti.checked = false;
          pushButton.textContent = 'Enable Notification';
        }
      });
  });
}

// Once the service worker is registered set the initial state
function initialiseState() {
  // Are Notifications supported in the service worker?
  if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
    document.getElementById("tips").innerHTML="Note: Push Notification is NOT working with your browser <a href='https://jakearchibald.github.io/isserviceworkerready/' target='_blank'><i class=' tiny mdi-action-info-outline tooltipped' data-position='right' data-delay='50' data-tooltip='Read more'></i></a>";
    return;
  }

  // Check the current Notification permission.
  // If its denied, it's a permanent block until the
  // user changes the permission
  if (Notification.permission === 'denied') {
    document.getElementById("tips").innerHTML="Note: You have block the site permission to push notification. <a href='https://jakearchibald.github.io/isserviceworkerready/' target='_blank'><i class=' tiny mdi-action-info-outline tooltipped' data-position='right' data-delay='50' data-tooltip='Read more'></i></a>";
    return;
  }

  // Check if push messaging is supported
  if (!('PushManager' in window)) {
    document.getElementById("tips").innerHTML="Note: Push Notification is NOT working with your browser <a href='https://jakearchibald.github.io/isserviceworkerready/' target='_blank'><i class=' tiny mdi-action-info-outline tooltipped' data-position='right' data-delay='50' data-tooltip='Read more'></i></a>";
    return;
  }

  // We need the service worker registration to check for a subscription
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    // Do we already have a push message subscription?
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        // Enable any UI which subscribes / unsubscribes from
        // push messages.
        var pushButton = document.querySelector('.js-push-button');
        var pushNoti = document.getElementById("push-noti");
        document.getElementById("tips").innerHTML="";
        pushButton.disabled = false;

        if (!subscription) {
          // We aren’t subscribed to push, so set UI
          // to allow the user to enable push
          return;
        }

        // Keep your server in sync with the latest subscription
        sendSubscriptionToServer(subscription);

        // Set your UI to show they have subscribed for
        // push messages
        pushButton.textContent = 'Disable Notification';
        isPushEnabled = true;
        pushNoti.checked = true;
      })
      .catch(function(err) {
      });
  });
}

window.addEventListener('load', function() {
  var pushNoti = document.getElementById("push-noti");
  pushNoti.addEventListener('change', function() {
    if (isPushEnabled) {
      unsubscribe();
    } else {
      subscribe();
    }
  });

  // Check that service workers are supported, if so, progressively
  // enhance and add push messaging support, otherwise continue without it.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(initialiseState);
  } else {
    document.getElementById("tips").innerHTML="Note: Push Notification is NOT working with your browser <a href='https://jakearchibald.github.io/isserviceworkerready/' target='_blank'><i class=' tiny mdi-action-info-outline tooltipped' data-position='right' data-delay='50' data-tooltip='Read more'></i></a>";
  }
});

function unregister(){
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    // registration worked
    registration.unregister().then(function(boolean) {
      // if boolean = true, unregister is successful
      window.location.replace("//mmu-api.appspot.com/logout");
    });
  }).catch(function(error) {
    // registration failed
  });
};
}

