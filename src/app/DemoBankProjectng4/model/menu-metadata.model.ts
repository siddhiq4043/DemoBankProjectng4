export const MenuMetadata = [
  {
    id: 1,
    title: 'Home',
    iconName: 'fa-home',
    routeUrl: '/home',
    subMenu: []
  },
  {
    id: 2,
    title: 'About Us',
    iconName: 'fa-id-badge',
    routeUrl: '/about-us',
    subMenu: []
  },
  {
    id: 3,
    title: 'Products',
    iconName: 'fa-cubes',
    routeUrl: '/products',
    subMenu: [
      {
        id: 1,
        title: 'All Loans',
        iconName: 'fa-cubes',
        routeUrl: '/all-loans'
      },
      {
        id: 2,
        title: 'Personal Loans',
        iconName: 'fa-user-o',
        routeUrl: '/personal-loans'
      },
      {
        id: 3,
        title: 'Loan Against Property',
        iconName: 'fa-home',
        routeUrl: '/loan-against-property'
      },
      {
        id: 4,
        title: 'Business Loans',
        iconName: 'fa-home',
        routeUrl: '/business-loans'
      },
      {
        id: 5,
        title: 'Balance Transfer TopUp Loans',
        iconName: 'fa-home',
        routeUrl: '/balance-transfer-top-up-loans'
      },
      {
        id: 6,
        title: 'House Loans',
        iconName: 'fa-home',
        routeUrl: '/house-loans'
      }
    ]
  },
  {
    id: 4,
    title: 'Customer Services',
    iconName: 'fa-users',
    routeUrl: '/customer-services',
    subMenu: [
      {
        id: 1,
        title: 'FAQ s',
        iconName: 'fa-question-circle-o',
        routeUrl: '/faqs'
      },
      {
        id: 2,
        title: 'Customer Support',
        iconName: 'fa-volume-control-phone',
        routeUrl: '/customer-support'
      },
      {
        id: 3,
        title: 'Interest Rates & Charges',
        iconName: 'fa-percent',
        routeUrl: '/interest-rates-charges'
      },
      {
        id: 4,
        title: 'Pay Online',
        iconName: 'fa-inr',
        routeUrl: '/pay-online'
      },
      {
        id: 5,
        title: 'GST - FAQ',
        iconName: 'fa-info-circle',
        routeUrl: '/gst-faq'
      }
    ]
  },
  {
    id: 5,
    title: 'Locate Us',
    iconName: 'fa-map-marker',
    routeUrl: '/locate-us',
    subMenu: []
  }
];
