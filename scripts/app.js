
angular
	.module("StarterApp",["ngMaterial", 'ui.router','firebase'])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){
		$mdThemingProvider.theme('default')
			.primaryPalette('blue')
			.accentPalette('lime');

		$stateProvider
			.state('classifieds', {
				url: '/rywcgberygiueyrcgbergbjcerygfwdgeyrbcgw5t7654t645b254t4r5gckjeryfvur5xby54btgcl54mwnw871qeukghdbxzskedleojegbezqadastgeujer8440edyhfgdhsjfvswsnsgvfd',
				templateUrl: 'components/classifieds/classifieds.tpl.html',
				controller: 'AppCtrl'
				
			})
			.state('login', {
				url: '/rywcgberygiueyrcgbergbjcerygfwdgeyrbcgw5t7654t645b254t4r5gckjeryfvur5xby54btgcl54mwnw871qeukghdbxnzskedleojegbezqadastgeujer8440edyhfgdhsjfvswsnsgvfd',
				templateUrl: 'components/classifieds/login.html',
				controller: 'LogCtrl'
				
			})

		$urlRouterProvider.otherwise('rywcgberygiueyrcgbergbjcerygfwdgeyrbcgw5t7654t645b254t4r5gckjeryfvur5xby54btgcl54mwnw871qeukghdbxnzskedleojegbezqadastgeujer8440edyhfgdhsjfvswsnsgvfd');
	});
