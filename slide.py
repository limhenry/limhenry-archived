import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self, *args, **kwargs):
        self.redirect("https://github.com/limhenry/slide/blob/master/README.md") 

app = webapp2.WSGIApplication([
    ('/.*', MainPage),
], debug=True)