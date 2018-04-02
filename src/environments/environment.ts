// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
	firebase: {
		apiKey: "AIzaSyCkAsI7uKKre2NiXtrIlZxp8xZ_Xz3r7Ng",
    authDomain: "clientpanelprod-826f4.firebaseapp.com",
    databaseURL: "https://clientpanelprod-826f4.firebaseio.com",
    projectId: "clientpanelprod-826f4",
    storageBucket: "clientpanelprod-826f4.appspot.com",
    messagingSenderId: "292042988245"
	}
};
