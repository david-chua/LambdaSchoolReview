# Responsive Design

Responsive design covers topics that range from fixed layouts to fully responsive websites. Responsive design addresses accessibility challenges and how developers can use flexible units to overcome them. On top of being accessible, fully responsive websites are a joy to use and push web development forward.

## Responsive Web Design layouts

### Fixed Layout

Fixed layouts are what the early web looked like. Designs usually looked good on desktop screens but would slowly get worse as the browser's viewport got smaller and smaller.

Horizontal scroll bars were a normal feature and you would find yourself pinching and zooming all over mobile devices to read a website.

User experience is usually poor.

Features of Fixed Layout:

* Design is usually desktop only
* CSS widths are usually hardcoded pixels
* Horizontal scroll bars appear as the viewport shrinks smaller than the website's design
* No media queries are used
* Quicker deployment.


### Fluid Layout

Opposite of a fixed layout is one that could expand and contract in proportion to most devices. This sounds great at first, but without constraints, you soon have to think about how your site will look on several devices with one set of styles.

Some of the problems of a fluid layout include
* images getting too small
* buttons growing too large
* layouts that grow to be way too spacious for desktops.

Fluid Layout Features:

* Design is often divided among desktop, tablet, or phone.
* Percent based units instead of hardcoded pixels.
* Everything is designed to proportionally shrink
* No media queries are used.

### Adaptive Layout

Adaptive layout borrows from the speed of a fixed-layout but accommodate different devices at a specific breakpoints in design.

Adaptive layout is another cheap and easy way to get more content out quickly for a business to more devices. Adaptive layout still lacks in accommodating for thousands of devices because care was only given to specific designs at certain breakpoints.

Adaptive Layout features:

* Design is often divided among desktop, tablet or phone.
* Media queries are used
* Layout widths are still hardcoded at each media query
* Quick deployment for specific devices.

### Responsive layout

Responsive layout combines features of fixed, adaptive, and fluid websites into one seamless experience. Media queries are used to constrain responsiveness units so that as the viewport expands or shrinks, you get an experience that looks and functions beautifully across thousands of devices and screen sizes.

Responsive Layout features:

* Design is often divided among desktop, tablets, or phone
* Responsive units are used throughout the site.
* Media queries are used
* Site accomodates thousands of devices and takes longer to build.


## Accessibility

Web accessibility deals with making web pages and the internet accessible to all people, regardless of how they need to interact with the page. As web developers, you should be designing web pages with all people in mind, including, but not limited to: those with slow internet connection, those on mobile devices, those with auditory, cognitive, neurological, or physical disabilities, and those with visual needs.


### Universal Design Theory

This theory states that designing with the "furthest out" individual in mind will end up benefiting all individuals who use the product or environment. The theory reaches all sorts of design - web, architecture, learning and more. A commonly used example of universal design theory, applied to real-world problems are ramps on sidewalk. Although it's designed for people on wheelchairs, they are used and enjoyed by many other for different needs such as parents with strollers.

The idea of accessibility in web originated because people with disabilities needed to be able to access the internet in non-traditional ways.

Other universal benefits of accessibility include designs intended for permanent physical impairments that help people with temporary issues and designs intended for the hearing impaired, for example, closed captioning, that help everyone when they're in a loud space or can't use headphones.

### Responsive Units

One of the simplest ways to make sure your website is accessible is to use responsive units. These are scalable units that are important in terms of accessibility. For example, browsers have settings that allows users to change a page's font size, but that only works if associated CSS is scalable - REM, EM, % are all scalable.

### Screen Readers

Screen readers are a great thing to keep top of mind while designing for accessibility. A screen reader is a tool that transmits web page data for people with visual impairments, learning disabilities, or other needs. They usually operate b y verbalizing the content or sometimes translating into braille. Screen readers read content based on how the HTML is coded and navigating through other elements accordingly.

As a web developer, it is important to make sure that your tags are semantic so that users who rely on screen readers can navigate accordingly. A webpage made entirely of divs would provide no hierarchy to the screen readers or the user and would prevent them from being able to navigate through the site.

### Color

Close to 5% of the population of the USA is colorblind. Not to mention that plenty of folks view website in gray scale out of personal preference. Therefore, when color is used to convey an important meaning, the message can be lose to a lot of users.

To avoid this issue, every colorfully displayed component should have a visual counterpart. An "x" image on a red error. 
