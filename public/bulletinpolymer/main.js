  window.addEventListener('WebComponentsReady', function(e) {

(function(document) {
    'use strict';
    var app = document.querySelector('#app');
    var bul = document.querySelector('bulletin-element');

    app.items = [];

    var isNewUser = true;
    var ref = new Firebase("https://mmubulletin.firebaseio.com");
    var pages = document.querySelector('neon-animated-pages');
    var filterVar = "";

    ref.onAuth(function(authData) {
        if (authData && isNewUser) {
            ref.child("users").child(authData.uid).set({
                provider: authData.provider,
                name: getName(authData),
                email: getEmail(authData)
            });
        }
    });

    function getName(authData) {
        return authData.google.displayName;
    }

    function getEmail(authData) {
        return authData.google.email;
    }

    var bulletinRef = new Firebase("https://mmubulletin.firebaseio.com/bulletin/");
    bulletinRef.on("value", function(snapshot) {
        var pages = document.querySelector('neon-animated-pages');
        pages.selected = 2;
        bul.updateItems(snapshot);
    }, function(errorObject) {
        if (errorObject.code == "PERMISSION_DENIED") {
            var pages = document.querySelector('neon-animated-pages');
            pages.selected = 1;
        } else {
            console.log(errorObject.code)
        }
    });

    bul.updateItems = function(snapshot) {
        bul.profileURL = "src/profile.png";
        this.items = [];
        snapshot.forEach(function(childSnapshot) {
            bul.radios = [{value: "BURSARY"}, {value: "CCU"}, {value: "CDP"}, {value: "ERU"}, {value: "FCI"}, {value: "FCM"}, {value: "FET"}, { value: "FIN"}, {value: "FIST"}, {value: "FMD"}, {value: "FOB"}, {value: "FOE"}, {value: "FOL"}, {value: "FOM"}, {value: "GSM" }, { value: "IO" }, { value: "IPS" }, { value: "ITSD" }, { value: "LIB" }, { value: "MPU" }, { value: "SECURITY" }, { value: "SSC" }, { value: "STAD" }, { value: "UNITE" }, { value: "YUM" }];
            var item = childSnapshot.val();
            bul.push('items', item);
            bul.this = this;
            bul._filter = function(item) {
                if (!item) return false;
                return item.postDept && ~item.postDept.toLowerCase().indexOf((filterVar).toLowerCase());
            };
        }.bind(bul));
        Firebase.goOffline();
    }

    app.login = function() {
        ref.authWithOAuthPopup("google", function(error, authData) {
            location.reload()
            if (error) {
                if (error.code === "TRANSPORT_UNAVAILABLE") {
                    ref.authWithOAuthRedirect("google", function(error) {});
                }
            } else if (authData) {}
        }, {
            scope: "email"
        });
    }

    bul.logout = function() {
        ref.unauth();
        location.reload()
    }

    bul.toggle = function(event) {
        var p = document.getElementById('text' + event.target.id);
        p.innerHTML = p.innerHTML.replace(/\n\n/g, "<br>");
        var tempID = '#content' + event.target.id;
        document.querySelector(tempID).toggle();
    }

    bul.filter = function() {
        var paperButton = document.querySelector('paper-radio-group');
        filterVar = paperButton.selected;
        this.$.bulletinPost.render();
        document.getElementById('mainContainer').scrollTop = 0
    };

})(document);
  });
