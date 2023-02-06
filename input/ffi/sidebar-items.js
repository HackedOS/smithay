window.SIDEBAR_ITEMS = {"constant":[["libinput_button_state_LIBINPUT_BUTTON_STATE_PRESSED",""],["libinput_button_state_LIBINPUT_BUTTON_STATE_RELEASED",""],["libinput_config_accel_profile_LIBINPUT_CONFIG_ACCEL_PROFILE_ADAPTIVE","An adaptive acceleration profile. Pointer acceleration depends on the input speed. This is the default profile for most devices."],["libinput_config_accel_profile_LIBINPUT_CONFIG_ACCEL_PROFILE_FLAT","A flat acceleration profile. Pointer motion is accelerated by a constant (device-specific) factor, depending on the current speed."],["libinput_config_accel_profile_LIBINPUT_CONFIG_ACCEL_PROFILE_NONE","Placeholder for devices that don’t have a configurable pointer acceleration profile."],["libinput_config_click_method_LIBINPUT_CONFIG_CLICK_METHOD_BUTTON_AREAS","Use software-button areas to generate button events."],["libinput_config_click_method_LIBINPUT_CONFIG_CLICK_METHOD_CLICKFINGER","The number of fingers decides which button press to generate."],["libinput_config_click_method_LIBINPUT_CONFIG_CLICK_METHOD_NONE","Do not send software-emulated button events. This has no effect on events generated by physical buttons."],["libinput_config_drag_lock_state_LIBINPUT_CONFIG_DRAG_LOCK_DISABLED","Drag lock is to be disabled, or is currently disabled"],["libinput_config_drag_lock_state_LIBINPUT_CONFIG_DRAG_LOCK_ENABLED","Drag lock is to be enabled, or is currently disabled"],["libinput_config_drag_state_LIBINPUT_CONFIG_DRAG_DISABLED","Drag is to be disabled, or is currently disabled."],["libinput_config_drag_state_LIBINPUT_CONFIG_DRAG_ENABLED","Drag is to be enabled, or is currently enabled"],["libinput_config_dwt_state_LIBINPUT_CONFIG_DWT_DISABLED",""],["libinput_config_dwt_state_LIBINPUT_CONFIG_DWT_ENABLED",""],["libinput_config_middle_emulation_state_LIBINPUT_CONFIG_MIDDLE_EMULATION_DISABLED","Middle mouse button emulation is to be disabled, or is currently disabled."],["libinput_config_middle_emulation_state_LIBINPUT_CONFIG_MIDDLE_EMULATION_ENABLED","Middle mouse button emulation is to be enabled, or is currently enabled."],["libinput_config_scroll_button_lock_state_LIBINPUT_CONFIG_SCROLL_BUTTON_LOCK_DISABLED",""],["libinput_config_scroll_button_lock_state_LIBINPUT_CONFIG_SCROLL_BUTTON_LOCK_ENABLED",""],["libinput_config_scroll_method_LIBINPUT_CONFIG_SCROLL_2FG","Send scroll events when two fingers are logically down on the device."],["libinput_config_scroll_method_LIBINPUT_CONFIG_SCROLL_EDGE","Send scroll events when a finger moves along the bottom or right edge of a device."],["libinput_config_scroll_method_LIBINPUT_CONFIG_SCROLL_NO_SCROLL","Never send scroll events instead of pointer motion events. This has no effect on events generated by scroll wheels."],["libinput_config_scroll_method_LIBINPUT_CONFIG_SCROLL_ON_BUTTON_DOWN","Send scroll events when a button is down and the device moves along a scroll-capable axis."],["libinput_config_send_events_mode_LIBINPUT_CONFIG_SEND_EVENTS_DISABLED","Do not send events through this device. Depending on the device, this may close all file descriptors on the device or it may leave the file descriptors open and route events through a different device."],["libinput_config_send_events_mode_LIBINPUT_CONFIG_SEND_EVENTS_DISABLED_ON_EXTERNAL_MOUSE","If an external pointer device is plugged in, do not send events from this device. This option may be available on built-in touchpads."],["libinput_config_send_events_mode_LIBINPUT_CONFIG_SEND_EVENTS_ENABLED","Send events from this device normally. This is a placeholder mode only, any device detected by libinput can be enabled. Do not test for this value as bitmask."],["libinput_config_status_LIBINPUT_CONFIG_STATUS_INVALID","< Invalid parameter range"],["libinput_config_status_LIBINPUT_CONFIG_STATUS_SUCCESS","< Config applied successfully"],["libinput_config_status_LIBINPUT_CONFIG_STATUS_UNSUPPORTED","< Configuration not available on this device"],["libinput_config_tap_button_map_LIBINPUT_CONFIG_TAP_MAP_LMR","1/2/3 finger tap maps to left/middle/right"],["libinput_config_tap_button_map_LIBINPUT_CONFIG_TAP_MAP_LRM","1/2/3 finger tap maps to left/right/middle"],["libinput_config_tap_state_LIBINPUT_CONFIG_TAP_DISABLED","< Tapping is to be disabled, or is currently disabled"],["libinput_config_tap_state_LIBINPUT_CONFIG_TAP_ENABLED","< Tapping is to be enabled, or is currently enabled"],["libinput_device_capability_LIBINPUT_DEVICE_CAP_GESTURE",""],["libinput_device_capability_LIBINPUT_DEVICE_CAP_KEYBOARD",""],["libinput_device_capability_LIBINPUT_DEVICE_CAP_POINTER",""],["libinput_device_capability_LIBINPUT_DEVICE_CAP_SWITCH",""],["libinput_device_capability_LIBINPUT_DEVICE_CAP_TABLET_PAD",""],["libinput_device_capability_LIBINPUT_DEVICE_CAP_TABLET_TOOL",""],["libinput_device_capability_LIBINPUT_DEVICE_CAP_TOUCH",""],["libinput_event_type_LIBINPUT_EVENT_DEVICE_ADDED","Signals that a device has been added to the context. The device will not be read until the next time the user calls libinput_dispatch() and data is available."],["libinput_event_type_LIBINPUT_EVENT_DEVICE_REMOVED","Signals that a device has been removed. No more events from the associated device will be in the queue or be queued after this event."],["libinput_event_type_LIBINPUT_EVENT_GESTURE_HOLD_BEGIN","@since 1.19"],["libinput_event_type_LIBINPUT_EVENT_GESTURE_HOLD_END","@since 1.19"],["libinput_event_type_LIBINPUT_EVENT_GESTURE_PINCH_BEGIN","A key pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_GESTURE_PINCH_END","A key pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_GESTURE_PINCH_UPDATE","A key pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_GESTURE_SWIPE_BEGIN","A key pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_GESTURE_SWIPE_END","A key pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_GESTURE_SWIPE_UPDATE","A key pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_KEYBOARD_KEY","Signals that a device has been removed. No more events from the associated device will be in the queue or be queued after this event."],["libinput_event_type_LIBINPUT_EVENT_NONE","This is not a real event type, and is only used to tell the user that no new event is available in the queue. See libinput_next_event_type()."],["libinput_event_type_LIBINPUT_EVENT_POINTER_AXIS","A scroll event from various sources."],["libinput_event_type_LIBINPUT_EVENT_POINTER_BUTTON","Signals that a device has been removed. No more events from the associated device will be in the queue or be queued after this event."],["libinput_event_type_LIBINPUT_EVENT_POINTER_MOTION","Signals that a device has been removed. No more events from the associated device will be in the queue or be queued after this event."],["libinput_event_type_LIBINPUT_EVENT_POINTER_MOTION_ABSOLUTE","Signals that a device has been removed. No more events from the associated device will be in the queue or be queued after this event."],["libinput_event_type_LIBINPUT_EVENT_POINTER_SCROLL_CONTINUOUS","A scroll event from a continuous scroll source, e.g. button scrolling. This event is sent is sent in addition to the @ref LIBINPUT_EVENT_POINTER_AXIS event for all events with a libinput_event_pointer_get_axis_source() of @ref LIBINPUT_POINTER_AXIS_SOURCE_CONTINUOUS. Ignore @ref LIBINPUT_EVENT_POINTER_AXIS if you are processing this event."],["libinput_event_type_LIBINPUT_EVENT_POINTER_SCROLL_FINGER","A scroll event caused by the movement of one or more fingers on a device. This event is sent is sent in addition to the @ref LIBINPUT_EVENT_POINTER_AXIS event for all events with a libinput_event_pointer_get_axis_source() of @ref LIBINPUT_POINTER_AXIS_SOURCE_FINGER. Ignore @ref LIBINPUT_EVENT_POINTER_AXIS if you are processing this event."],["libinput_event_type_LIBINPUT_EVENT_POINTER_SCROLL_WHEEL","A scroll event from a wheel. This event is sent is sent in addition to the @ref LIBINPUT_EVENT_POINTER_AXIS event for all events with a libinput_event_pointer_get_axis_source() of @ref LIBINPUT_POINTER_AXIS_SOURCE_WHEEL. Ignore @ref LIBINPUT_EVENT_POINTER_AXIS if you are processing this event."],["libinput_event_type_LIBINPUT_EVENT_SWITCH_TOGGLE","@since 1.7"],["libinput_event_type_LIBINPUT_EVENT_TABLET_PAD_BUTTON","A button pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_TABLET_PAD_KEY","A key pressed on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_TABLET_PAD_RING","A status change on a tablet ring with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_TABLET_PAD_STRIP","A status change on a strip on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_PAD capability."],["libinput_event_type_LIBINPUT_EVENT_TABLET_TOOL_AXIS","One or more axes have changed state on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_TOOL capability. This event is only sent when the tool is in proximity, see @ref LIBINPUT_EVENT_TABLET_TOOL_PROXIMITY for details."],["libinput_event_type_LIBINPUT_EVENT_TABLET_TOOL_BUTTON","Signals that a tool has changed a logical button state on a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_TOOL capability."],["libinput_event_type_LIBINPUT_EVENT_TABLET_TOOL_PROXIMITY","Signals that a tool has come in or out of proximity of a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_TOOL capability."],["libinput_event_type_LIBINPUT_EVENT_TABLET_TOOL_TIP","Signals that a tool has come in contact with the surface of a device with the @ref LIBINPUT_DEVICE_CAP_TABLET_TOOL capability."],["libinput_event_type_LIBINPUT_EVENT_TOUCH_CANCEL","A scroll event from a continuous scroll source, e.g. button scrolling. This event is sent is sent in addition to the @ref LIBINPUT_EVENT_POINTER_AXIS event for all events with a libinput_event_pointer_get_axis_source() of @ref LIBINPUT_POINTER_AXIS_SOURCE_CONTINUOUS. Ignore @ref LIBINPUT_EVENT_POINTER_AXIS if you are processing this event."],["libinput_event_type_LIBINPUT_EVENT_TOUCH_DOWN","A scroll event from a continuous scroll source, e.g. button scrolling. This event is sent is sent in addition to the @ref LIBINPUT_EVENT_POINTER_AXIS event for all events with a libinput_event_pointer_get_axis_source() of @ref LIBINPUT_POINTER_AXIS_SOURCE_CONTINUOUS. Ignore @ref LIBINPUT_EVENT_POINTER_AXIS if you are processing this event."],["libinput_event_type_LIBINPUT_EVENT_TOUCH_FRAME","Signals the end of a set of touchpoints at one device sample time. This event has no coordinate information attached."],["libinput_event_type_LIBINPUT_EVENT_TOUCH_MOTION","A scroll event from a continuous scroll source, e.g. button scrolling. This event is sent is sent in addition to the @ref LIBINPUT_EVENT_POINTER_AXIS event for all events with a libinput_event_pointer_get_axis_source() of @ref LIBINPUT_POINTER_AXIS_SOURCE_CONTINUOUS. Ignore @ref LIBINPUT_EVENT_POINTER_AXIS if you are processing this event."],["libinput_event_type_LIBINPUT_EVENT_TOUCH_UP","A scroll event from a continuous scroll source, e.g. button scrolling. This event is sent is sent in addition to the @ref LIBINPUT_EVENT_POINTER_AXIS event for all events with a libinput_event_pointer_get_axis_source() of @ref LIBINPUT_POINTER_AXIS_SOURCE_CONTINUOUS. Ignore @ref LIBINPUT_EVENT_POINTER_AXIS if you are processing this event."],["libinput_key_state_LIBINPUT_KEY_STATE_PRESSED",""],["libinput_key_state_LIBINPUT_KEY_STATE_RELEASED",""],["libinput_led_LIBINPUT_LED_CAPS_LOCK",""],["libinput_led_LIBINPUT_LED_NUM_LOCK",""],["libinput_led_LIBINPUT_LED_SCROLL_LOCK",""],["libinput_log_priority_LIBINPUT_LOG_PRIORITY_DEBUG",""],["libinput_log_priority_LIBINPUT_LOG_PRIORITY_ERROR",""],["libinput_log_priority_LIBINPUT_LOG_PRIORITY_INFO",""],["libinput_pointer_axis_LIBINPUT_POINTER_AXIS_SCROLL_HORIZONTAL",""],["libinput_pointer_axis_LIBINPUT_POINTER_AXIS_SCROLL_VERTICAL",""],["libinput_pointer_axis_source_LIBINPUT_POINTER_AXIS_SOURCE_CONTINUOUS","The event is caused by the motion of some device."],["libinput_pointer_axis_source_LIBINPUT_POINTER_AXIS_SOURCE_FINGER","The event is caused by the movement of one or more fingers on a device."],["libinput_pointer_axis_source_LIBINPUT_POINTER_AXIS_SOURCE_WHEEL","The event is caused by the rotation of a wheel."],["libinput_pointer_axis_source_LIBINPUT_POINTER_AXIS_SOURCE_WHEEL_TILT","The event is caused by the tilting of a mouse wheel rather than its rotation. This method is commonly used on mice without separate horizontal scroll wheels."],["libinput_switch_LIBINPUT_SWITCH_LID","The laptop lid was closed when the switch state is @ref LIBINPUT_SWITCH_STATE_ON, or was opened when it is @ref LIBINPUT_SWITCH_STATE_OFF."],["libinput_switch_LIBINPUT_SWITCH_TABLET_MODE","This switch indicates whether the device is in normal laptop mode or behaves like a tablet-like device where the primary interaction is usually a touch screen. When in tablet mode, the keyboard and touchpad are usually inaccessible."],["libinput_switch_state_LIBINPUT_SWITCH_STATE_OFF",""],["libinput_switch_state_LIBINPUT_SWITCH_STATE_ON",""],["libinput_tablet_pad_ring_axis_source_LIBINPUT_TABLET_PAD_RING_SOURCE_FINGER","The event is caused by the movement of one or more fingers on the ring."],["libinput_tablet_pad_ring_axis_source_LIBINPUT_TABLET_PAD_RING_SOURCE_UNKNOWN",""],["libinput_tablet_pad_strip_axis_source_LIBINPUT_TABLET_PAD_STRIP_SOURCE_FINGER","The event is caused by the movement of one or more fingers on the strip."],["libinput_tablet_pad_strip_axis_source_LIBINPUT_TABLET_PAD_STRIP_SOURCE_UNKNOWN",""],["libinput_tablet_tool_proximity_state_LIBINPUT_TABLET_TOOL_PROXIMITY_STATE_IN",""],["libinput_tablet_tool_proximity_state_LIBINPUT_TABLET_TOOL_PROXIMITY_STATE_OUT",""],["libinput_tablet_tool_tip_state_LIBINPUT_TABLET_TOOL_TIP_DOWN",""],["libinput_tablet_tool_tip_state_LIBINPUT_TABLET_TOOL_TIP_UP",""],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_AIRBRUSH","< An airbrush-like tool"],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_BRUSH","< A paintbrush-like tool"],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_ERASER","< Eraser"],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_LENS","< A mouse tool with a lens"],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_MOUSE","< A mouse bound to the tablet"],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_PEN","< A generic pen"],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_PENCIL","< Physical drawing tool, e.g. Wacom Inking Pen"],["libinput_tablet_tool_type_LIBINPUT_TABLET_TOOL_TYPE_TOTEM","< A rotary device with positional and rotation data"]],"fn":[["libinput_config_status_to_str","@ingroup config"],["libinput_device_config_accel_get_default_profile","@ingroup config"],["libinput_device_config_accel_get_default_speed","@ingroup config"],["libinput_device_config_accel_get_profile","@ingroup config"],["libinput_device_config_accel_get_profiles","@ingroup config"],["libinput_device_config_accel_get_speed","@ingroup config"],["libinput_device_config_accel_is_available","@ingroup config"],["libinput_device_config_accel_set_profile","@ingroup config"],["libinput_device_config_accel_set_speed","@ingroup config"],["libinput_device_config_calibration_get_default_matrix","@ingroup config"],["libinput_device_config_calibration_get_matrix","@ingroup config"],["libinput_device_config_calibration_has_matrix","@ingroup config"],["libinput_device_config_calibration_set_matrix","@ingroup config"],["libinput_device_config_click_get_default_method","@ingroup config"],["libinput_device_config_click_get_method","@ingroup config"],["libinput_device_config_click_get_methods","@ingroup config"],["libinput_device_config_click_set_method","@ingroup config"],["libinput_device_config_dwt_get_default_enabled","@ingroup config"],["libinput_device_config_dwt_get_enabled","@ingroup config"],["libinput_device_config_dwt_is_available","@ingroup config"],["libinput_device_config_dwt_set_enabled","@ingroup config"],["libinput_device_config_left_handed_get","@ingroup config"],["libinput_device_config_left_handed_get_default","@ingroup config"],["libinput_device_config_left_handed_is_available","@ingroup config"],["libinput_device_config_left_handed_set","@ingroup config"],["libinput_device_config_middle_emulation_get_default_enabled","@ingroup config"],["libinput_device_config_middle_emulation_get_enabled","@ingroup config"],["libinput_device_config_middle_emulation_is_available","@ingroup config"],["libinput_device_config_middle_emulation_set_enabled","@ingroup config"],["libinput_device_config_rotation_get_angle","@ingroup config"],["libinput_device_config_rotation_get_default_angle","@ingroup config"],["libinput_device_config_rotation_is_available","@ingroup config"],["libinput_device_config_rotation_set_angle","@ingroup config"],["libinput_device_config_scroll_get_button","@ingroup config"],["libinput_device_config_scroll_get_button_lock","@ingroup config"],["libinput_device_config_scroll_get_default_button","@ingroup config"],["libinput_device_config_scroll_get_default_button_lock","@ingroup config"],["libinput_device_config_scroll_get_default_method","@ingroup config"],["libinput_device_config_scroll_get_default_natural_scroll_enabled","@ingroup config"],["libinput_device_config_scroll_get_method","@ingroup config"],["libinput_device_config_scroll_get_methods","@ingroup config"],["libinput_device_config_scroll_get_natural_scroll_enabled","@ingroup config"],["libinput_device_config_scroll_has_natural_scroll","@ingroup config"],["libinput_device_config_scroll_set_button","@ingroup config"],["libinput_device_config_scroll_set_button_lock","@ingroup config"],["libinput_device_config_scroll_set_method","@ingroup config"],["libinput_device_config_scroll_set_natural_scroll_enabled","@ingroup config"],["libinput_device_config_send_events_get_default_mode","@ingroup config"],["libinput_device_config_send_events_get_mode","@ingroup config"],["libinput_device_config_send_events_get_modes","@ingroup config"],["libinput_device_config_send_events_set_mode","@ingroup config"],["libinput_device_config_tap_get_button_map","@ingroup config"],["libinput_device_config_tap_get_default_button_map","@ingroup config"],["libinput_device_config_tap_get_default_drag_enabled","@ingroup config"],["libinput_device_config_tap_get_default_drag_lock_enabled","@ingroup config"],["libinput_device_config_tap_get_default_enabled","@ingroup config"],["libinput_device_config_tap_get_drag_enabled","@ingroup config"],["libinput_device_config_tap_get_drag_lock_enabled","@ingroup config"],["libinput_device_config_tap_get_enabled","@ingroup config"],["libinput_device_config_tap_get_finger_count","@ingroup config"],["libinput_device_config_tap_set_button_map","@ingroup config"],["libinput_device_config_tap_set_drag_enabled","@ingroup config"],["libinput_device_config_tap_set_drag_lock_enabled","@ingroup config"],["libinput_device_config_tap_set_enabled","@ingroup config"],["libinput_device_get_context","@ingroup device"],["libinput_device_get_device_group","@ingroup device"],["libinput_device_get_id_product","@ingroup device"],["libinput_device_get_id_vendor","@ingroup device"],["libinput_device_get_name","@ingroup device"],["libinput_device_get_output_name","@ingroup device"],["libinput_device_get_seat","@ingroup device"],["libinput_device_get_size","@ingroup device"],["libinput_device_get_sysname","@ingroup device"],["libinput_device_get_udev_device","@ingroup device"],["libinput_device_get_user_data","@ingroup device"],["libinput_device_group_get_user_data","@ingroup device"],["libinput_device_group_ref","@ingroup device"],["libinput_device_group_set_user_data","@ingroup device"],["libinput_device_group_unref","@ingroup device"],["libinput_device_has_capability","@ingroup device"],["libinput_device_keyboard_has_key","@ingroup device"],["libinput_device_led_update","@ingroup device"],["libinput_device_pointer_has_button","@ingroup device"],["libinput_device_ref","@ingroup device"],["libinput_device_set_seat_logical_name","@ingroup device"],["libinput_device_set_user_data","@ingroup device"],["libinput_device_switch_has_switch","@ingroup device"],["libinput_device_tablet_pad_get_mode_group","@ingroup tablet_pad_modes"],["libinput_device_tablet_pad_get_num_buttons","@ingroup device"],["libinput_device_tablet_pad_get_num_mode_groups","@ingroup tablet_pad_modes"],["libinput_device_tablet_pad_get_num_rings","@ingroup device"],["libinput_device_tablet_pad_get_num_strips","@ingroup device"],["libinput_device_tablet_pad_has_key","@ingroup device"],["libinput_device_touch_get_touch_count","@ingroup device"],["libinput_device_unref","@ingroup device"],["libinput_dispatch","@ingroup base"],["libinput_event_destroy","@ingroup event"],["libinput_event_device_notify_get_base_event","@ingroup event"],["libinput_event_gesture_get_angle_delta","@ingroup event_gesture"],["libinput_event_gesture_get_base_event","@ingroup event_gesture"],["libinput_event_gesture_get_cancelled","@ingroup event_gesture"],["libinput_event_gesture_get_dx","@ingroup event_gesture"],["libinput_event_gesture_get_dx_unaccelerated","@ingroup event_gesture"],["libinput_event_gesture_get_dy","@ingroup event_gesture"],["libinput_event_gesture_get_dy_unaccelerated","@ingroup event_gesture"],["libinput_event_gesture_get_finger_count","@ingroup event_gesture"],["libinput_event_gesture_get_scale","@ingroup event_gesture"],["libinput_event_gesture_get_time","@ingroup event_gesture"],["libinput_event_gesture_get_time_usec","@ingroup event_gesture"],["libinput_event_get_context","@ingroup event"],["libinput_event_get_device","@ingroup event"],["libinput_event_get_device_notify_event","@ingroup event"],["libinput_event_get_gesture_event","@ingroup event"],["libinput_event_get_keyboard_event","@ingroup event"],["libinput_event_get_pointer_event","@ingroup event"],["libinput_event_get_switch_event","@ingroup event"],["libinput_event_get_tablet_pad_event","@ingroup event"],["libinput_event_get_tablet_tool_event","@ingroup event"],["libinput_event_get_touch_event","@ingroup event"],["libinput_event_get_type","@ingroup event"],["libinput_event_keyboard_get_base_event","@ingroup event_keyboard"],["libinput_event_keyboard_get_key","@ingroup event_keyboard"],["libinput_event_keyboard_get_key_state","@ingroup event_keyboard"],["libinput_event_keyboard_get_seat_key_count","@ingroup event_keyboard"],["libinput_event_keyboard_get_time","@ingroup event_keyboard"],["libinput_event_keyboard_get_time_usec","@ingroup event_keyboard"],["libinput_event_pointer_get_absolute_x","@ingroup event_pointer"],["libinput_event_pointer_get_absolute_x_transformed","@ingroup event_pointer"],["libinput_event_pointer_get_absolute_y","@ingroup event_pointer"],["libinput_event_pointer_get_absolute_y_transformed","@ingroup event_pointer"],["libinput_event_pointer_get_axis_source","@ingroup event_pointer"],["libinput_event_pointer_get_axis_value","@ingroup event_pointer"],["libinput_event_pointer_get_axis_value_discrete","@ingroup event_pointer"],["libinput_event_pointer_get_base_event","@ingroup event_pointer"],["libinput_event_pointer_get_button","@ingroup event_pointer"],["libinput_event_pointer_get_button_state","@ingroup event_pointer"],["libinput_event_pointer_get_dx","@ingroup event_pointer"],["libinput_event_pointer_get_dx_unaccelerated","@ingroup event_pointer"],["libinput_event_pointer_get_dy","@ingroup event_pointer"],["libinput_event_pointer_get_dy_unaccelerated","@ingroup event_pointer"],["libinput_event_pointer_get_scroll_value","@ingroup event_pointer"],["libinput_event_pointer_get_scroll_value_v120","@ingroup event_pointer"],["libinput_event_pointer_get_seat_button_count","@ingroup event_pointer"],["libinput_event_pointer_get_time","@ingroup event_pointer"],["libinput_event_pointer_get_time_usec","@ingroup event_pointer"],["libinput_event_pointer_has_axis","@ingroup event_pointer"],["libinput_event_switch_get_base_event","@ingroup event_switch"],["libinput_event_switch_get_switch","@ingroup event_switch"],["libinput_event_switch_get_switch_state","@ingroup event_switch"],["libinput_event_switch_get_time","@ingroup event_switch"],["libinput_event_switch_get_time_usec","@ingroup event_switch"],["libinput_event_tablet_pad_get_base_event","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_button_number","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_button_state","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_key","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_key_state","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_mode","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_mode_group","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_ring_number","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_ring_position","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_ring_source","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_strip_number","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_strip_position","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_strip_source","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_time","@ingroup event_tablet_pad"],["libinput_event_tablet_pad_get_time_usec","@ingroup event_tablet_pad"],["libinput_event_tablet_tool_distance_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_get_base_event","@ingroup event_tablet"],["libinput_event_tablet_tool_get_button","@ingroup event_tablet"],["libinput_event_tablet_tool_get_button_state","@ingroup event_tablet"],["libinput_event_tablet_tool_get_distance","@ingroup event_tablet"],["libinput_event_tablet_tool_get_dx","@ingroup event_tablet"],["libinput_event_tablet_tool_get_dy","@ingroup event_tablet"],["libinput_event_tablet_tool_get_pressure","@ingroup event_tablet"],["libinput_event_tablet_tool_get_proximity_state","@ingroup event_tablet"],["libinput_event_tablet_tool_get_rotation","@ingroup event_tablet"],["libinput_event_tablet_tool_get_seat_button_count","@ingroup event_tablet"],["libinput_event_tablet_tool_get_size_major","@ingroup event_tablet"],["libinput_event_tablet_tool_get_size_minor","@ingroup event_tablet"],["libinput_event_tablet_tool_get_slider_position","@ingroup event_tablet"],["libinput_event_tablet_tool_get_tilt_x","@ingroup event_tablet"],["libinput_event_tablet_tool_get_tilt_y","@ingroup event_tablet"],["libinput_event_tablet_tool_get_time","@ingroup event_tablet"],["libinput_event_tablet_tool_get_time_usec","@ingroup event_tablet"],["libinput_event_tablet_tool_get_tip_state","@ingroup event_tablet"],["libinput_event_tablet_tool_get_tool","@ingroup event_tablet"],["libinput_event_tablet_tool_get_wheel_delta","@ingroup event_tablet"],["libinput_event_tablet_tool_get_wheel_delta_discrete","@ingroup event_tablet"],["libinput_event_tablet_tool_get_x","@ingroup event_tablet"],["libinput_event_tablet_tool_get_x_transformed","@ingroup event_tablet"],["libinput_event_tablet_tool_get_y","@ingroup event_tablet"],["libinput_event_tablet_tool_get_y_transformed","@ingroup event_tablet"],["libinput_event_tablet_tool_pressure_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_rotation_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_size_major_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_size_minor_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_slider_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_tilt_x_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_tilt_y_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_wheel_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_x_has_changed","@ingroup event_tablet"],["libinput_event_tablet_tool_y_has_changed","@ingroup event_tablet"],["libinput_event_touch_get_base_event","@ingroup event_touch"],["libinput_event_touch_get_seat_slot","@ingroup event_touch"],["libinput_event_touch_get_slot","@ingroup event_touch"],["libinput_event_touch_get_time","@ingroup event_touch"],["libinput_event_touch_get_time_usec","@ingroup event_touch"],["libinput_event_touch_get_x","@ingroup event_touch"],["libinput_event_touch_get_x_transformed","@ingroup event_touch"],["libinput_event_touch_get_y","@ingroup event_touch"],["libinput_event_touch_get_y_transformed","@ingroup event_touch"],["libinput_get_event","@ingroup base"],["libinput_get_fd","@ingroup base"],["libinput_get_user_data","@ingroup base"],["libinput_log_get_priority","@ingroup base"],["libinput_log_set_handler","@ingroup base"],["libinput_log_set_priority","@ingroup base"],["libinput_next_event_type","@ingroup base"],["libinput_path_add_device","@ingroup base"],["libinput_path_create_context","@ingroup base"],["libinput_path_remove_device","@ingroup base"],["libinput_ref","@ingroup base"],["libinput_resume","@ingroup base"],["libinput_seat_get_context","@ingroup seat"],["libinput_seat_get_logical_name","@ingroup seat"],["libinput_seat_get_physical_name","@ingroup seat"],["libinput_seat_get_user_data","@ingroup seat"],["libinput_seat_ref","@ingroup seat"],["libinput_seat_set_user_data","@ingroup seat"],["libinput_seat_unref","@ingroup seat"],["libinput_set_user_data","@ingroup base"],["libinput_suspend","@ingroup base"],["libinput_tablet_pad_mode_group_button_is_toggle","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_get_index","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_get_mode","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_get_num_modes","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_get_user_data","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_has_button","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_has_ring","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_has_strip","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_ref","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_set_user_data","@ingroup tablet_pad_modes"],["libinput_tablet_pad_mode_group_unref","@ingroup tablet_pad_modes"],["libinput_tablet_tool_get_serial","@ingroup event_tablet"],["libinput_tablet_tool_get_tool_id","@ingroup event_tablet"],["libinput_tablet_tool_get_type","@ingroup event_tablet"],["libinput_tablet_tool_get_user_data","@ingroup event_tablet"],["libinput_tablet_tool_has_button","@ingroup event_tablet"],["libinput_tablet_tool_has_distance","@ingroup event_tablet"],["libinput_tablet_tool_has_pressure","@ingroup event_tablet"],["libinput_tablet_tool_has_rotation","@ingroup event_tablet"],["libinput_tablet_tool_has_size","@ingroup event_tablet"],["libinput_tablet_tool_has_slider","@ingroup event_tablet"],["libinput_tablet_tool_has_tilt","@ingroup event_tablet"],["libinput_tablet_tool_has_wheel","@ingroup event_tablet"],["libinput_tablet_tool_is_unique","@ingroup event_tablet"],["libinput_tablet_tool_ref","@ingroup event_tablet"],["libinput_tablet_tool_set_user_data","@ingroup event_tablet"],["libinput_tablet_tool_unref","@ingroup event_tablet"],["libinput_udev_assign_seat","@ingroup base"],["libinput_udev_create_context","@ingroup base"],["libinput_unref","@ingroup base"]],"struct":[["__va_list_tag",""],["libinput","@ingroup base @struct libinput"],["libinput_device","@ingroup device @struct libinput_device"],["libinput_device_group","@ingroup device @struct libinput_device_group"],["libinput_event","@ingroup event @struct libinput_event"],["libinput_event_device_notify","@ingroup event @struct libinput_event_device_notify"],["libinput_event_gesture",""],["libinput_event_keyboard","@ingroup event_keyboard @struct libinput_event_keyboard"],["libinput_event_pointer","@ingroup event_pointer @struct libinput_event_pointer"],["libinput_event_switch","@ingroup event_switch @struct libinput_event_switch"],["libinput_event_tablet_pad","@ingroup event_tablet_pad @struct libinput_event_tablet_pad"],["libinput_event_tablet_tool","@ingroup event_tablet @struct libinput_event_tablet_tool"],["libinput_event_touch","@ingroup event_touch @struct libinput_event_touch"],["libinput_interface","@ingroup base @struct libinput_interface"],["libinput_seat","@ingroup seat @struct libinput_seat"],["libinput_tablet_pad_mode_group","@ingroup tablet_pad_modes @struct libinput_tablet_pad_mode_group"],["libinput_tablet_tool","@ingroup device @struct libinput_tablet_tool"],["udev",""],["udev_device",""]],"type":[["__builtin_va_list",""],["__int32_t",""],["__uint32_t",""],["__uint64_t",""],["libinput_button_state","@ingroup device"],["libinput_config_accel_profile","@ingroup config"],["libinput_config_click_method","@ingroup config"],["libinput_config_drag_lock_state","@ingroup config"],["libinput_config_drag_state","@ingroup config"],["libinput_config_dwt_state","@ingroup config"],["libinput_config_middle_emulation_state","@ingroup config"],["libinput_config_scroll_button_lock_state",""],["libinput_config_scroll_method","@ingroup config"],["libinput_config_send_events_mode","@ingroup config"],["libinput_config_status","@ingroup config"],["libinput_config_tap_button_map","@ingroup config"],["libinput_config_tap_state","@ingroup config"],["libinput_device_capability","@ingroup device"],["libinput_event_type","@ingroup base"],["libinput_key_state","@ingroup device"],["libinput_led","@ingroup device"],["libinput_log_handler","@ingroup base"],["libinput_log_priority","@ingroup base"],["libinput_pointer_axis","@ingroup device"],["libinput_pointer_axis_source","@ingroup device"],["libinput_switch","@ingroup device"],["libinput_switch_state","@ingroup device"],["libinput_tablet_pad_ring_axis_source","@ingroup event_tablet_pad"],["libinput_tablet_pad_strip_axis_source","@ingroup event_tablet_pad"],["libinput_tablet_tool_proximity_state","@ingroup device"],["libinput_tablet_tool_tip_state","@ingroup device"],["libinput_tablet_tool_type","@ingroup device"],["va_list",""]]};