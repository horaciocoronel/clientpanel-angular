import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {
	settings: Settings = {
		allowRegistration: false,
		disableBalanceOnAdd: false,
		disableBalanceOnEdit: true
	}

  constructor() { }

	getSettings() : Settings {
		return this.settings
	}
}
