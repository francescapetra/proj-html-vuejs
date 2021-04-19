var app = new Vue(
  {
    el: "#root",
    data: {
      iconsSocial:[
        {
          name: 'facebook-f',
          family: 'fab ',
          prefix: 'fa-',
        },
        {
          name: 'twitter',
          family: 'fab ',
          prefix: 'fa-',
        },
        {
          name: 'instagram',
          family: 'fab ',
          prefix: 'fa-',
        },
        {
          name: 'youtube',
          family: 'fab ',
          prefix: 'fa-',
        },
    ],
      shoppingNav:[
        {
          name: "Shopping Cart",
          nameBtn: "My Account",
          nameBtnCart: "Cart",
        }
      ],
      menuListNav:[
        {
          link: "Home"
        },
        {
        link: "Shop"
        },
        {
          link: "Products"
        },
        {
          link: "Categories"
        },
        {
          link: "News"
        },
        {
          link: "Elements"
        },
      ],

      }
    },
);
