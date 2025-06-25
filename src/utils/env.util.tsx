class ENV {

    constructor(){}

    /**
     * @name isStaging
     * @description determine if app is in staging mode
     * @returns {boolean} boolean
     */
    public isStaging(): boolean {
        let result: boolean = import.meta.env.VITE_ENV === 'staging' ? true :false;
        return result
    }

    /**
     * @name isProduction
     * @description determine if app is in production mode
     * @returns {boolean} boolean
     */
    public isProduction(): boolean {
        let result: boolean = import.meta.env.VITE_ENV === 'production' ? true :false;
        return result
    }

    /**
     * @name isDev
     * @description determine if app is in development mode
     * @returns {boolean} boolean
     */
    public isDev(): boolean {
        let result: boolean = import.meta.env.VITE_ENV === 'development' ? true :false;
        return result
    }

}

export default new ENV();