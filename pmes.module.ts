import { WarningListComponent } from './warning-list/warning-list.component';
import { PmesApiService, WarningLevelService } from './shared/index';

export default angular.module( 'pmes.module', [] )

    // services
    .service( 'pmesApiService', PmesApiService )
    .service( 'warningLevelService', WarningLevelService )

    // components
    .directive( 'warningList', WarningListComponent )

    // routes
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.warningList', {
                    url: 'warningList',
                    views: {
                        content: {
                            template: '<warning-list></warning-list>'
                        }
                    }
                });
        }
] ).name;