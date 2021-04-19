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
          link: "Home",
          icon: 'chevron-down',
          family: 'fas ',
          prefix: 'fa-',
        },
        {
          link: "Shop",
          icon: 'chevron-down',
          family: 'fas ',
          prefix: 'fa-',
        },
        {
          link: "Products",
          icon: 'chevron-down',
          family: 'fas ',
          prefix: 'fa-',
        },
        {
          link: "Categories",
          icon: 'chevron-down',
          family: 'fas ',
          prefix: 'fa-',
        },
        {
          link: "News"
        },
        {
          link: "Elements",
          icon: 'chevron-down',
          family: 'fas ',
          prefix: 'fa-',
        },
      ],

      }
    },
);
