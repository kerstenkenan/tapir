from tapir.accounts.tests.factories.factories import TapirUserFactory
from tapir.shifts.models import ShiftAttendanceMode
from tapir.shifts.services.shift_can_shop_service import ShiftCanShopService
from tapir.utils.tests_utils import TapirFactoryTestBase


class TestShiftCanShopService(TapirFactoryTestBase):
    def test_canShop_userWithRegularAttendanceMode_canShop(self):
        shift_user_data = TapirUserFactory.create().shift_user_data
        shift_user_data.attendance_mode = ShiftAttendanceMode.REGULAR
        shift_user_data.save()
        self.assertTrue(ShiftCanShopService.can_shop(shift_user_data))

    def test_canShop_userWithFrozenAttendanceMode_cannotShop(self):
        shift_user_data = TapirUserFactory.create().shift_user_data
        shift_user_data.attendance_mode = ShiftAttendanceMode.FROZEN
        shift_user_data.save()
        self.assertFalse(ShiftCanShopService.can_shop(shift_user_data))
