import _ from 'lodash';

/* @ngInject */
function vpnSettingsModel($rootScope) {
    let CACHE = {};
    const get = (key = 'all') => angular.copy(key === 'all' ? CACHE : CACHE[key]);
    const clear = () => (CACHE = {});
    const set = (key = 'all', value) => {
        if (key === 'all') {
            _.extend(CACHE, value);
        } else {
            CACHE[key] = value;
        }

        $rootScope.$emit('vpnSettings', { type: 'updated', data: get() });
    };

    $rootScope.$on('logout', () => clear());

    return { get, set };
}
export default vpnSettingsModel;
