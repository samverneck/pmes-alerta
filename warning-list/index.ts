
import 'angular-ui-router';

import warningListComponent from './warning-list.component';
import pmesShared from '../shared/index';

const dependencies = [
    'ui.router', pmesShared.name
];

export default angular.module( 'warning-list.component', dependencies )
                      .directive( 'warningList', warningListComponent )
                      .config( [
                          '$stateProvider', ( $stateProvider ) => {
                              $stateProvider
                                  .state( 'app.warningList', {
                                      url: 'warningList',
                                      data: {title: 'Avisos'},
                                      views: {
                                          content: {
                                              template: '<warning-list></warning-list>'
                                          }
                                      }
                                  } );
                          }
                      ] );
