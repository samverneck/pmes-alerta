import { IHttpService, IHttpPromiseCallbackArg } from 'angular';
import { ISettings } from '../../shared/shared.module';
import { Warning } from './models/index';

export class PmesApiService {

    public static $inject: string[] = [ '$http', 'settings' ];


    /**
     * Creates an instance of PmesApiService.
     * 
     * @param {IHttpService} $http
     * @param {ISettings} settings
     */
    constructor( private $http: IHttpService, private settings: ISettings ) {
    }

    /**
     * 
     * 
     * @returns {Promise<Warning[]>}
     */
    public getLastWarnings(): Promise<Warning[]> {
        return this.$http.get( `${this.settings.api.pmes}/alerts` )
            .then(( response: IHttpPromiseCallbackArg<Warning[]> ) => response.data );
    }
}