import os
import jinja2
import webapp2
import json
import logging
from google.appengine.api import urlfetch

JINJA_ENVIRONMENT = jinja2.Environment(
	loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
	extensions=['jinja2.ext.autoescape'],
	autoescape=True)


class MainPage(webapp2.RequestHandler):
	def get(self):

		url = 'https://limhenryxyz.firebaseio.com/.json'

		try:
			result = urlfetch.fetch(url)
			if result.status_code == 200:
				data = json.loads(result.content)
				try:
					template_values = {
						'name' : data['name'],
						'honorsandawards': data['honorsandawards'],
						'presentationsandtalks': data['presentationsandtalks'],
						'projects': data['projects'],
						'skill': data['skill'],
						'contact': data['contact'],
						'blog': data['blog']
					}
					template = JINJA_ENVIRONMENT.get_template('templates/index.html')
					self.response.write(template.render(template_values))				
				except Exception,e:
					logging.error(e)
					self.redirect("https://twitter.com/henrylim96")
			else:
				logging.error("Something Went Wrong")
				self.redirect("https://twitter.com/henrylim96")
		except urlfetch.Error,e:
			logging.error(e)
			self.redirect("https://twitter.com/henrylim96")			

app = webapp2.WSGIApplication([
	('/', MainPage),
], debug=True)