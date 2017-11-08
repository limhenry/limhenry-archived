import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self, *args, **kwargs):
        self.redirect("https://slides.limhenry.xyz") 

app = webapp2.WSGIApplication([
    ('/.*', MainPage),
], debug=True)