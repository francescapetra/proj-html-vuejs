var app = new Vue(
  {
    el: "#root",
    data: {
      visible: true,

      showNavbar: true,
      lastScrollPosition: 0,

      contactIndex: 0,
      isActive: false,

      min: 0,
      max: 4,

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

      buttonsGenre:[
        "Men",
        "Women",
        "Accessories"
      ],
      manProducts:[
        {
          img:"img/black_elegant_leather_jacket.jpg",
          type: "Elegant Leather Jacket",
          genre:"Men, jackets, Jeans",
          originalPrice: "$295",
          cost:"$ 200"
        },
        {
          img: "img/black_leather_suit-400x520.jpg",
          type: "Leather Korean Jacket",
          genre:"Men, jackets, Jeans",
          cost:"$ 176"
        },
        {
          img: "img/blue_jacket_and_white_stripe_tee-400x520.jpg",
          type: "Blue Jacket",
          genre:"Men, jackets",
          cost:"$ 580"
        },
        {
          img: "img/modern_black_leather_suit-400x520.jpg",
          type: "Modern Jacket",
          genre:"Men, jackets",
          cost:"$ 96"
        },
      ],
      womanProducts:[
        {
          img:"img/spring_printed_dress.jpg",
          type: "Dress Print",
          genre:"Women",
          originalPrice: "$195",
          cost:"$ 127"
        },
        {
          img: "img/modern_love_tee.jpg",
          type: "Love Tee",
          genre:"Women",
          cost:"$ 25"
        },
        {
          img: "img/black_leather_jacket.jpg",
          type: "Jacket Hit",
          genre:"Women",
          cost:"$ 125"
        },
        {
          img: "img/hipster_black_top.jpg",
          type: "Rock Tee",
          genre:"Women",
          cost:"$ 35"
        },
      ],
      accessoriesProducts:[
        {
          img:"img/brown_dress_shoes-400x520.jpg",
          type: "Shoes Brown",
          genre:"Accessories",
          originalPrice: "$395",
          cost:"$ 250"
        },
        {
          img: "img/leather_gloves-400x520.jpg",
          type: "Leather Gloves",
          genre:"Accessories",
          cost:"$ 145"
        },
        {
          img: "img/casual_leather_belts-400x520.jpg",
          type: "Belt Squam",
          genre:"Accessories",
          cost:"$ 125"
        },
        {
          img: "img/modern_leather_boots-400x520.jpg",
          type: "Boots Leather",
          genre:"Accessories",
          cost:"$ 335"
        },
      ],
      featuredProducts: [],

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
      ],
      ratedTitle: "top rated products",
      postTitle: "recent post",
      tagTitle: "tags",
      recentPost:[
        "Aenean lobortis sapien enim viverra",
        "Duis ac massa semper maximus",
        "Nunc fermint nulla eu justo sem id",
        "Aliquam posuere magna eget nibh",
        "Cras ac nulla ac consecte rutrum",
        "Fusce mattis nunc ut aliquam",
      ],
      tags:[
        "Black",
        "Boots",
        "Brown",
        "Casual",
        "D&G",
        "Fabric",
        "Flowers",
        "Grey",
        "Hat",
        "Hipster",
        "Lines",
        "Multi-prupose",
        "New York",
        "Outdoors",
        "Red",
        "Responsive",
        "Summer",
        "Sweater",
        "Travel",
        "Warm",
        "White",
        "Winter",
        ],
      },
    methods:{
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      },
      myFilter: function() {
      this.isActive = !this.isActive;
      },
      clickGenre: function(min,max){
        this.min= min;
        this.max = max;
      },
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll);
      this.featuredProducts = [...this.manProducts,...this.womanProducts,...this.accessoriesProducts];
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
);
