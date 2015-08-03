'use strict';

module.exports = {
  app: {
    title: 'NOCO SAR / ESS',
    description: 'Serving Northern Colorado',
    keywords: 'noco, sar, ess, search and rescue, emergency service support, ems, emr, traffic control, volunteer',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3333,
  templateEngine: 'swig',
  sessionSecret: 'MEAN',
  sessionCollection: 'sessions',
  logo: 'modules/core/img/brand/logo.png',
  favicon: 'modules/core/img/brand/favicon.ico'
};
