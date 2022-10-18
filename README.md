# bisnis-indo-api
mini project magang SMARTEK



LINK: https://bisnis-indo-api.herokuapp.com

===================================

- Get all kanal/kategori 
	- endpoint	: /categories

- Get a kanal and its subKanal(s)
	- endpoint	: /categories
	- parameter	: kanal id (id)
	- example	: /categories/1

- Get all subKanal 
	- endpoint	: /subcategories

- Get all contents
	- endpoint	: /contents

- Get n content(s)
	- endpoint	: /contents
	- query		: length
	- example	: /contents?length=5

- Get n favourite content(s) 
	- endpoint	: /contents
	- query		: likes
	- example	: /contents?likes=3  	

- Get n recent content(s)
	- endpoint	: /contents
	- query		: recent
	- example	: /contents?recent=3

- Get n content(s) based on category
	- endpoint	: /contents
	- query		: category, length
	- example	: /contents?category=Finansial&length=2
