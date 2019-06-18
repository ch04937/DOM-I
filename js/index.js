const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//add navigation 
const nav = document.querySelectorAll('a')
function makeTextForNav(nav) {
  let i;
  const len = nav.length;
  const textContent = ["Services", "Products", "Vision", 'Features', 'About', 'Contact']
  for (i = 0; i < len; i += 1) {
      nav[i].innerText = textContent[i];
  }
}
makeTextForNav(nav);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//add DOM is Awesome 
const heading = document.querySelector('h1')
heading.innerText = 'DOM IS AWESOME'

//add img for heading 
let headingImg = document.getElementById("cta-img");
headingImg.setAttribute('src', siteContent["cta"]["img-src"])

//add button text
const buttonTxt = document.querySelector('button')
buttonTxt.innerText = 'Get Started'

// add main content txt headers
const mainContentHeaders = document.querySelectorAll('h4')
function h4MainContentHeader(mainContentHeaders) {
  let i; 
  const headerH4Len = mainContentHeaders.length;
  const tittleMainContent = ['Features', 'About', 'Services','Services', 'Product', 'Vision']
  for (i =0 ; i < headerH4Len; i++){
    mainContentHeaders[i].innerText = tittleMainContent[i];
  }
}
h4MainContentHeader(mainContentHeaders);

const mainContentTxt =document.querySelectorAll('p')

function paraForMainContent(mainContentTxt){
  let i;
  const mainContentPara = mainContentTxt.length;
  const txtContent = ['Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.','Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.']
  for (i =0; i< mainContentPara; i++){
    mainContentTxt[i].innerText = txtContent[i];
  }
}
paraForMainContent(mainContentTxt);


//main content img 
let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//add contact info
const contactHeader = document.querySelectorAll('h4')
contactHeader[5].innerText = 'Contact'
const contactTxt = document.querySelectorAll('p')
contactTxt[5].innerText = '123 Way 456 Street Somewhere, USA'
contactTxt[6].innerText = '1 (888) 888-8888'
contactTxt[7].innerText = 'sales@greatidea.io'

// add footer info
const footer = document.querySelectorAll('p')
footer[8].innerText = 'Copyright Great Idea! 2018'