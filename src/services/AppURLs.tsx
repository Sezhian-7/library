
const appUrlsJson = {
    ourAppUrls: {
      user: {
        home: '/',
        login: '/user/login',
        forgot: '/user/forgot',
        reset: '/user/reset',
        verify: '/user/verify',
      },
      questionnaires: '/questionnaires',
      fooddiary:'/fooddiary',  
      terms:'/terms',
      privacy:'/privacy',
      dashboard:'/dashboard',
      cliniciandashboard:'/cliniciandashboard',
      clinicianoverview:'/clinicianoverview',
      admindashboard:'/admindashboard',
      logout:'/logout'  
    },  
  }
  
  function checkInnerJson(jsonData: any) {
    if (jsonData) {
      for (const key in jsonData) {
        if (typeof jsonData[key] === 'string') {
          jsonData[key] = `${jsonData[key]}`;
        } else {
          jsonData[key] = checkInnerJson(jsonData[key]);
        }
      }
    }
    return jsonData as typeof appUrlsJson.ourAppUrls;
  }
  
  
  const appUrls = {
    ...checkInnerJson(appUrlsJson.ourAppUrls),
    // outerDomainUrls: appUrlsJson.outerDomainUrls,
  }
  
  export default appUrls
  