/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) 2023 Passbolt SA (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2023 Passbolt SA (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 * @since         4.3.0
 */

import SetResourceGridUserSettingController from "./setResourceGridUserSettingController";
import {RESOURCE_GRID_USER_SETTING_STORAGE_KEY} from "../../service/local_storage/ressourceGridSettingLocalStorage";
import AccountEntity from "../../model/entity/account/accountEntity";
import {defaultAccountDto} from "../../model/entity/account/accountEntity.test.data";

beforeEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
});

describe("SetResourceColumnsSettingController", () => {
  describe("SetResourceColumnsSettingController::exec", () => {
    it("Should update the resource columns settings in the local storage.", async() => {
      expect.assertions(1);
      const account = new AccountEntity(defaultAccountDto());
      const columnsSetting = [{id: "name", label: "name"}];
      const sorter = {propertyName: "name", asc: true};
      const gridUserSetting = {columns_setting: columnsSetting, sorter: sorter};
      jest.spyOn(browser.storage.local, "set");
      const controller = new SetResourceGridUserSettingController(null, null, account);
      await controller.exec(gridUserSetting);

      expect(browser.storage.local.set).toHaveBeenCalledWith({[`${RESOURCE_GRID_USER_SETTING_STORAGE_KEY}-${account.id}`]: gridUserSetting});
    });

    it("Should not update the resource columns settings if an error occurred.", async() => {
      expect.assertions(1);
      const account = new AccountEntity(defaultAccountDto());
      const columnsSetting = {};
      const controller = new SetResourceGridUserSettingController(null, null, account);
      try {
        await controller.exec(columnsSetting);
      } catch (error) {
        expect(error.message).toEqual("Could not validate entity GridUserSetting.");
      }
    });
  });
});
