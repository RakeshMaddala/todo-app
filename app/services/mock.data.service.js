angular.module('to-do-app').factory('mockservice', [function () {
    var projects = [
        { 
          projectName: 'Street Lights', 
          projectstatus: 'Done',
          projectinformation: {
            description: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
            duration: '3 months',
            teammembers: 'Suresh, Rakesh, Nagesh'
          },
          serialnumber: '1111034'
        },
        { 
          projectName: 'Water Controllers', 
          projectstatus: 'Pending',
          projectinformation: {
            description: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
            duration: '4 months',
            teammembers: 'Suresh, Rakesh, Nagesh'
          },
          serialnumber: '1111035'
        },
        { 
          projectName: 'CRM Software', 
          projectstatus: 'Pending',
          projectinformation: {
            description: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
            duration: '4 months',
            teammembers: 'Suresh, Rakesh, Nagesh'
          },
          serialnumber: '1111036'
        },
        { 
          projectName: 'Flight Checkin', 
          projectstatus: 'Done',
          projectinformation: {
            description: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
            duration: '4 months',
            teammembers: 'Suresh, Rakesh, Nagesh'
          },
          serialnumber: '1111037'
        },
        { 
          projectName: 'Reporting', 
          projectstatus: 'Pending',
          projectinformation: {
            description: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
            duration: '4 months',
            teammembers: 'Suresh, Rakesh, Nagesh'
          },
          serialnumber: '1111038'
        },
        { 
          projectName: 'Data Analytics', 
          projectstatus: 'Done',
          projectinformation: {
            description: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
            duration: '4 months',
            teammembers: 'Suresh, Rakesh, Nagesh'
          },
          serialnumber: '1111039'
        }

    ];
    return projects;
}]);