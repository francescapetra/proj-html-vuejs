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
      ratedTitle: "top rated products",
      ratedFooter:[
        {
          dressName: "Black Jacket",
          iconStar: 'star',
          family: 'fas ',
          prefix: 'fa-',
          firstPrice: "$180",
          newPrice:"$125",
          img: "img/black_leather_jacket-120x156.jpg"
        },
        {
          dressName: "Black Leather Jacket",
          iconStar: 'star',
          family: 'fas ',
          prefix: 'fa-',
          firstPrice: "$235",
          newPrice:"$200",
          img: "img/black_elegant_leather_jacket-120x156.jpg"
        },
        {
          dressName: "Hipster Black Top",
          iconStar: 'star',
          family: 'fas ',
          prefix: 'fa-',
          firstPrice: "$125",
          newPrice:"$58",
          img: "img/hipster_black_top-120x156.jpg"
        },
      ]

      }
    },
);
