
const hamibot1 = {
    "env": { "delivery": "到店取", "specs_conf": "整盒", "purchase_count_conf": "2", "extra_selection_regex_conf": "", "extra_delay_conf": "0", "legacy_refresh_conf": false, "rage_stock_refresh_conf": false, "delay_conf": "500", "sku_result_toast_conf": false, "enable_random_delay_conf": true, "random_delay_lower_conf": "50", "random_delay_upper_conf": "100", "max_refresh_time_conf": "0", "ack_delay_conf": "0", "panic_timer_conf": "6", "ignore_ack_panic_timer_conf": "0", "shield_breaker_mode_conf": false, "ignore_ack_conf": false, "ignore_ack_click_delay_conf": "200", "special_confirm_delay_conf": "1750", "auto_click_notification_conf": false, "special_click_confirm_conf": false, "click_new_notification_conf": false, "main_window_alpha_conf": "", "reset_floaty_position_conf": false, "vibrate_time_conf": 1000, "payment_password_conf": "", "hide_console_conf": false, "use_legacy_floaty_conf": false, "use_minimal_floaty_conf": false, "keep_screen_on_conf": false, "run_on_boot_conf": false, "notification_based_control_conf": false, "monitored_titles_conf": "群名甲, 群名乙, 通知", "debug_mode_conf": false, "APP_ENV": "production", "USER_ID": "6827e993f46c32336632f5cd", "ROBOT_ID": "68b915ec08c3a8e61aebeaa6", "SCRIPT_ID": "68b911d9c765e16bd2541fbe", "TIMESTAMP": "2025-09-04 12:31:56", "JWT_TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnYiOnsiQVBQX0VOViI6InByb2R1Y3Rpb24iLCJVU0VSX0lEIjoiNjgyN2U5OTNmNDZjMzIzMzY2MzJmNWNkIiwiUk9CT1RfSUQiOiI2OGI5MTVlYzA4YzNhOGU2MWFlYmVhYTYiLCJTQ1JJUFRfSUQiOiI2OGI5MTFkOWM3NjVlMTZiZDI1NDFmYmUiLCJUSU1FU1RBTVAiOiIyMDI1LTA5LTA0IDEyOjMxOjU2In0sInBsYW4iOnsibmFtZSI6IuWNleiuvuWkh-aegemAn-eJiCIsIm9uRnJlZVRyaWFsIjp0cnVlLCJtb2RlbCI6ImZsYXRSYXRlIn0sIm1lc3NhZ2UiOiJqdjFfNDFvMkMzR1FrN2hsYkpma2NIZlJMZXIyY3VMTkhZMnciLCJpc3MiOiJodHRwczovL2hhbWlib3QuY29tIiwiaWF0IjoxNzU2OTYwMzE2LCJleHAiOjE3NTY5NjAzNzZ9.wZ7YJSmEFhfRC0p5zaPeAcDBJ6Imj8Fv6IWMduqabQk" }, "plan": { "name": "单设备极速版", "onFreeTrial": true, "model": "flatRate" }, "robotName": "晴丽竹笋", "scriptName": "PPMTWX小程序 极速刷新库存 辅助脚本 ppmt DRP", "postMessage":
        function () {
        }
    , "exit":
        function () {
            
        }
};;;
const { use_legacy_floaty_conf: drp_bM, use_minimal_floaty_conf: drp_bN } =
    hamibot1.env
var drp_bO, drp_bP, drp_bQ, drp_bR
if (drp_bM) {
    drp_bO = floaty.window(
        '\n                <vertical id="main_window" bg="#000000" alpha="0.9" w="100">\n                    <text id="title" text="灭霸. 买棺材" gravity="center" textColor="#66ccff" textStyle="bold" />\n                    <horizontal>\n                        <button id="start" text="运行" bg="#00FFFF" w="100" visibility="visible" />\n                        <button id="end" text="停止" bg="#FF0000" w="100" visibility="gone" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="10" />\n                    <horizontal>\n                        <button id="type_settings" text="方式" bg="#66ccff" w="50" h="40" />\n                        <button id="number_settings" text="数量" bg="#f0ff0f" w="50" h="40" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="10" />\n                    <horizontal>\n                        <button id="move_start" text="移动" bg="#f0ff0f" w="100" h="40" visibility="visible" />\n                        <button id="move_end" text="固定" bg="#00FFFF" w="100" h="40" visibility="gone" />\n                    </horizontal>\n                </vertical>\n                '
    )
} else {
    drp_bN
        ? (drp_bP = floaty.rawWindow(
            '<frame>\n                    <img id="drag" src="@drawable/ic_launcher" circle="true" tint="#66ccff" bg="#00000000" padding="2" w="75" h="75" />\n                    <text id="text_status" text="启动" textColor="#FFFFFF" textSize="14sp" layout_gravity="center" gravity="center" bg="#00000000" />\n                </frame>'
        ))
        : (drp_bQ = floaty.window(
            '<vertical id="main_window" bg="#000000" alpha="0.9" w="100">\n                    <text id="title" text="灭霸. 买棺材" gravity="center" textColor="#66ccff" textStyle="bold" />\n                    <horizontal>\n                        <button id="start" text="运行" bg="#00FFFF" w="100" visibility="visible" />\n                        <button id="end" text="停止" bg="#FF0000" w="100" visibility="gone" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="3" />\n                    <horizontal>\n                        <button id="config_settings" text="配置" bg="#66ccff" w="100" h="40" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="3" />\n                    <horizontal>\n                        <button id="move_start" text="移动" bg="#f0ff0f" w="100" h="40" visibility="visible" />\n                        <button id="move_end" text="固定" bg="#00FFFF" w="100" h="40" visibility="gone" />\n                    </horizontal>\n                </vertical>'
        ))
}
drp_bR = floaty.rawWindow(
    '<vertical id="config_main" bg="#000000" alpha="0.95" padding="10" w="1px" h="1px" textColor="#FFFFFF">\n                <text text="\u2699️ 临时配置设置" gravity="center" textColor="#FFFFFF" textStyle="bold" textSize="18" />\n                <button text="关闭" id="close_config" bg="#F44336" w="*" h="40" margin="0 10" />\n                <button text="本地配置预设" id="preset_config" bg="#FFD700" w="*" h="40" />\n                <button text="" bg="#111111" w="10" h="10" />\n                <scroll>\n                    <vertical>\n                        <button id="delivery_type_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="delivery_number_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="specs_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="extra_selection_regex_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n                        <button id="refresh_delay_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="legacy_refresh_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="enable_random_delay_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="random_delay_lower_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="random_delay_upper_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="max_refresh_time_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="rage_stock_refresh_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="payment_password_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n\n                        <button id="extra_delay_config" text="" bg="#2196F3" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="ack_delay_config" text="" bg="#2196F3" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n                        <button id="ignore_ack_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="special_confirm_delay_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="ignore_ack_click_delay_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="shield_breaker_mode_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="ignore_ack_panic_timer_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="panic_timer_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n                        \n\n                        <button id="vibrate_time_config" text="" bg="#3F51B5" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="main_window_alpha_config" text="" bg="#3F51B5" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="auto_click_notification_config" text="" bg="#3F51B5" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="reset_floaty_position_config" text="" bg="#3F51B5" w="*" h="50" />\n                    </vertical>\n                </scroll>\n            </vertical>'
)
var drp_bS = 'Ada lovelace',
    drp_bT = 'See it, say it, sorted.',
    drp_bU = "King's Cross",
    drp_bV,
    drp_bW,
    drp_bX,
    drp_bY,
    drp_bZ,
    drp_c0,
    drp_c1,
    drp_c2 = 'Never Settle.',
    drp_c2 =
        'lGTW1pMWlUUXVKTWJGZ1Y0aFF2ZllreUdIYnJaL2pJbFYwMFBncmdnUUVYZEJNNjdICkRUYWpqczVUSGJ4eTNIMENCU0pGNVI2WXBTdk9Ed25GeDBOdjN3T2R1TVDMzFQNm2JmeVZadnpRT2JuWGd1V3ptUEVxTE9PZ3lqd05mZWEwQW8zU295S2YxU3FoRW1YQ3ZwZHRDbkJJam9jTUZPNk9QR1VUVGE2Q1AgUT54dH4gRFpIUk9zdU5GTk5vSzluV08hdko4aTFpVFF1Sk1iRmdWNGhRdmZZa3lHSGJyWi9qSWxWMDBQZ3JnZ1FFWGRCTTY3SApEVGFqanM1VEhieHkzSDBDQlNKRjVSNllwU3ZPRHduRngwTnYzd09kdUwvTFlLMXJrN0RB' +
        drp_c2,
    drp_c3 = 'Practice makes perfect.'
drp_c3 = '47cf4380-5bda-40a3-9ab3-74e0cdd5b079'
function drp_c4(b, c) {
    var b = b + 10000
    drp_bV = hamibot1
    drp_bW = hamibot1
    drp_bX = drp_bW.exit
    drp_c0 = exit
    drp_c1 = exit
    drp_c2 =
        'VTNwU1ZVMTZSazVWVlZaRVRYcEdVVTV0Y0RGalJrWnNVVlpPYUdScmJ6Uk5helF5WVdwS05WZFhaRFpWTWtwdFpWWmFZV1J1Y0ZKVU1rcDFWMGRrTVZZemNIUlZSVlo0VkVVNVVGb3piSEZrTURWdFdsZEZkMUZYT0hwVk1qazFVekpaZUZVelJtOVNWekZaVVROYWQxcElVa1JpYTBwS1lXMDVhbFJWV2xCT2F6bFJVakZXVlZaSFJUSlJNVUZuVlZRMU5HUklOR2RTUm5CSlZXczVlbVJWTlVkVWF6VjJVM3BzZFZZd09IaGxSelV4VW0xMFZFd3hXWEpVUm14SFZGY3hjRTFYYkZWVldGWkxWRmRLUjFveFdUQmhSa1l5V214c2NtVlZaRWxaYmtwaFRESndTbUpHV1hkTlJrSnVZMjFrYmxWVlZsbGFSVXBPVG1wa1NVTnJVbFZaVjNCeFkzcFdWVk5IU2pSbFZFNUpUVVZPUTFVd2NFZE9Wa2t5VjFoQ1ZHUnJPVVZrTWpWSFpVUkNUMlJxVGpOVU1sSXhWRU01VFZkVmMzaGpiWE16VWtWRlBRPT0='
    drp_c3 = '42f93ddc-1c6f-40fc-82d7-5578a4596cd7'
}
for (let drp_eV = 0; drp_eV < 5; drp_eV++) {
    drp_c4(drp_eV, auto)
}
var drp_c5 = drp_bX
auto.waitFor()
console.error('[无障碍] 状态正常')
function drp_c6() {
    drp_bY = drp_bV.env
    drp_bZ = drp_bY
    drp_c2 =
        'U3pSVU16Rk5VVVZETXpGUU5tcDFjRkZsUVZOaGRrbzRNazQyYWpKNVdXZDZVMkptZVZaYWRucFJUMkp1V0dkMVYzcHRVRVZ4VEU5UFozbHFkMDVtWldFd1FXOHpVMjk1UzJZeFUzRm9SVzFZUTNad1pIUkRia0pKYW05alRVWlBOazlRUjFWVVZHRTJRMUFnVVQ1NGRINGdSRnBJVWs5emRVNUdUazV2U3psdVYwOHhlRzUxUm10VEwxWXJURmxHVFcxcE1XbFVVWFZLVFdKR1oxWTBhRkYyWmxscmVVZElZbkphTDJwSmJGWXdNRkJuY21kblVVVllaRUpOTmpkSUNrUlVZV3BxY3pWVVNHSjRlVE5JTUVOQ1UwcEdOVkkyV1hCVGRrOUVkMjVHZURCT2RqTjNUMlIxVEM5TVdVc3hjbXMzUkVFPQ=='
    drp_c3 = 'd2143c10-f1e5-4fe1-8055-0d07a77b63da'
}
drp_c6()
const {
    delivery: drp_c7,
    specs_conf: drp_c8,
    purchase_count_conf: drp_c9,
    type_conf: drp_ca,
    extra_delay_conf: drp_cb,
    delay_conf: drp_cc,
    enable_random_delay_conf: drp_cd,
    random_delay_lower_conf: drp_ce,
    random_delay_upper_conf: drp_cf,
    max_refresh_time_conf: drp_cg,
    auto_click_notification_conf: drp_ch,
    click_new_notification_conf: drp_ci,
    hide_console_conf: drp_cj,
    disable_click: drp_ck,
    ack_delay_conf: drp_cl,
    debug_mode_conf: drp_cm,
    ignore_ack_conf: drp_cn,
    main_window_alpha_conf: drp_co,
    reset_floaty_position_conf: drp_cp,
    ignore_ack_click_delay_conf: drp_cq,
    sku_result_toast_conf: drp_cr,
    rage_stock_refresh_conf: drp_cs,
    vibrate_time_conf: drp_ct,
    special_confirm_delay_conf: drp_cu,
    special_click_confirm_conf: drp_cv,
    extra_selection_regex_conf: drp_cw,
    payment_password_conf: drp_cx,
    shield_breaker_mode_conf: drp_cy,
    panic_timer_conf: drp_cz,
    ignore_ack_panic_timer_conf: drp_cA,
    keep_screen_on_conf: drp_cB,
    run_on_boot_conf: drp_cC,
    notification_based_control_conf: drp_cD,
    monitored_titles_conf: drp_cE,
    legacy_refresh_conf: drp_cF,
} = drp_bY,
    { onFreeTrial: drp_cG } = drp_bV.plan
var drp_cH = drp_cG
const drp_cI = new Date(drp_bY.TIMESTAMP),
    drp_cJ = new Date(),
    drp_cK = Math.abs(drp_cJ - drp_cI),
    drp_cL = 60000
var drp_bS, drp_bT, drp_bU
drp_cK > drp_cL
    ? (sleep(4000), exit())
    : ((drp_bS = drp_bV.scriptId),
        (drp_bT = drp_bV.scriptName),
        (drp_bU = drp_bV.plan.name),
        (drp_c3 = '2507cf26-ae50-4db9-8bd7-215be2663501'))
function drp_cM() {
    return (
        (drp_bZ = drp_bY.JWT_TOKEN),
        (drp_c3 = '57901f92-ae0f-41d1-aabd-8e7a4d3200cd'),
        drp_bZ + drp_bS + drp_bU
    )
}
var drp_cN, drp_cO, drp_cP
drp_bZ = drp_bS
drp_bZ = drp_bS + drp_bU
drp_cN = drp_cM()
drp_cO = http
drp_cP = http.get
drp_c2 =
    'N0lRcHJuVDdyNXlMZkpId01Ub1RERWZaaGFUNEhXTGtKc2xYRUJYNWFMVkQ0ckpxTUZEdTRNTGV2N3FOcFRWck9HMnBtb2hyV1hWekFBbmxRWFhtSDdmNGFLZjNLZ2RUQ0V6c2A5SnU7OCxQPiQxVz83QT5XLzdmMTJxb2ZaOXd1K280dVliSGxpdnExRWxlY053Qk5YelIwazZRejBrbjdUYS9CMm9SNklZRkNIczlmRkxkUk8wWmlRMG5JK2dnCmYxSzQ4QlZkZUh1MENyd3E3Z1RZdEd4TWxJWU1zZmNqQk1JWU5ySmR1V2hPMy95aVZkdUI='
!drp_bY.JWT_TOKEN ? drp_c1() : (drp_c2 = base64.decode(drp_c2))
!drp_cj && console.show()
var drp_cQ = 0,
    drp_cR = drp_c7 || '到店取',
    drp_cS = parseInt(drp_c9) || 1,
    drp_cT = drp_c8 || '单个',
    drp_cU = parseInt(drp_cc) || 300,
    drp_cV = parseInt(drp_cb) || 0,
    drp_cW = parseFloat(drp_cg) || 0,
    drp_cX = parseInt(drp_cl) || 0,
    drp_cY = drp_ch || false,
    drp_cZ = Math.max(parseInt(drp_ce) || 10, 1),
    drp_d0 = Math.max(parseInt(drp_cf) || 150, 1),
    drp_d1 = Math.min(Math.max(parseFloat(drp_co) || 0.9, 0), 1),
    drp_d2 = parseInt(drp_cq) || 200,
    drp_d3 = 0,
    drp_d4 = 0,
    drp_d5 = 0,
    drp_d6 = Date.now(),
    drp_d7 = parseInt(drp_ct) || 3000,
    drp_d8 = parseInt(drp_cu) || 1750,
    drp_d9 = drp_cp || false,
    drp_da = drp_cd || false,
    drp_db = drp_cn || false,
    drp_dc = drp_bM || false,
    drp_dd = drp_bN || false,
    drp_de = drp_ci || false,
    drp_df = drp_cs || false,
    drp_dg = drp_cv || false,
    drp_dh = drp_cw || '',
    drp_di = drp_cx || '',
    drp_dj = false,
    drp_dk = drp_cy || false,
    drp_dl = drp_cz || 0,
    drp_dm = drp_cA || 0,
    drp_dn = drp_cB || false,
    drp_do = drp_cC || false,
    drp_dp = drp_cD || false,
    drp_dq = drp_cE || '',
    drp_dr = drp_cF || false
drp_dq = drp_dq.split(/[,，]/)
if (drp_dp) {
    try {
        events.observeNotification()
        console.error('[控制] 正在监听微信消息通知')
        console.error('[控制] 正在监控的群组: ' + drp_dq.join(', '))
    } catch (drp_eW) {
        console.error(
            '[控制] 监听微信消息失败\uFF0C请确认已开启hamibot1的通知读取权限'
        )
    }
}
drp_do && console.info('[提示] 脚本已设置为开机自启动')
drp_dn &&
    (device.keepScreenOn(7200000000), console.info('[提示] 屏幕已保持常亮'))
function drp_ds() {
    return drp_bZ ? 200 : 1210
}
var drp_dt, drp_du, drp_dv
drp_dv = 'Bear'
drp_du = drp_dv
drp_du =
    'https://internal.alibaba.com/verify/2507cf26-ae50-4db9-8bd7-215be2663501/response'
function drp_dw(b, c, d) {
    let h = b.substring(d, d + 16)
    let j = b.substring(d + 16)
    return aes.decrypt(j, c, h)
}
function drp_dx() {
    return 'https://internal.alibaba.com/verify/2507cf26-ae50-4db9-8bd7-215be2663501/response'
}
function drp_dy() {
    return drp_dw(drp_c2, drp_c3, drp_ds() / 2)
}
drp_dv += 'er '
drp_du = drp_dy()
var drp_dz, drp_dA, drp_dB
function drp_dC() {
    try {
        drp_du = base64.decode(drp_du)
        let g = { d: drp_dv + drp_bZ }
        var c =
            'yRFxy902vYq9Kotiy4bU6LIWIx1TlMc07SKjZNXIeV3wAkXEMhzvwlY9y1ekT6C7dp4rvWSlAnUbAMeFOrXUq87xvFnA4U4ftGg3TRLG0{SV{tEy,:m*PNMHFupL79ugesPUPOHhOw==',
            d = drp_dw(c, drp_c3, drp_ds() / 2)
        var f = { headers: g }
        let h = drp_cP(drp_du, f)
        return (
            drp_cG && (drp_dj = false), (drp_dt = h.statusCode), drp_dt === drp_ds()
        )
    } catch (j) { }
}
var drp_dD = 'hamibot1.exit();'
function drp_dE() {
    var d = Math.floor(Math.random() * 100)
    drp_dz = d
    var f = 'hamibot1.exit();'
    drp_dz = drp_dt
    drp_dA = drp_dt
    drp_dB = drp_dt
}
drp_dE()
let drp_dF = drp_dC()
if (!drp_dF) {
    drp_ds()
    drp_bX()
} else {
    if (drp_cP) {
        let drp_eX = console
    }
}
var drp_dG = drp_dF
console.info('[欢迎使用] 灭霸. 买棺材 辅助脚本')
drp_cG
    ? (console.error(
        '目前为免费试用版, 功能受到限制\uFF0C如果觉得好用请重新订阅后再次购买!'
    ),
        console.error('在试用期间, 刷新速度的配置选项将无效, 固定为1000ms(1秒)'),
        (drp_cU = 1000))
    : (console.error('您目前使用的是本脚本的付费版, 功能将不会受到限制!'),
        console.error('非常感谢您的支持! 目前脚本将全速运行!'),
        console.error('有任何问题或功能建议\uFF0C欢迎您发工单'))
drp_dt / 2 != 100 && drp_bX()
!drp_dG && drp_c5()
var drp_dH = drp_dG
if (drp_dc) {
    var drp_dI = storages.create('DRP'),
        drp_dJ = drp_bO
    drp_dJ.main_window.attr('alpha', drp_d1)
    function drp_eY() {
        drp_cQ = 1
        drp_dJ.end.attr('visibility', 'visible')
        drp_dJ.start.attr('visibility', 'gone')
    }
    function drp_eZ() {
        drp_cQ = 0
        drp_dJ.end.attr('visibility', 'gone')
        drp_dJ.start.attr('visibility', 'visible')
    }
    drp_dJ.start.click(function () {
        drp_eY()
        console.error('[状态] 辅助脚本启动')
        if (!drp_dj) {
            console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot1和微信')
            drp_dj = true
            if (!drp_dG) {
                drp_c5()
            }
        }
    })
    drp_dJ.end.click(function () {
        drp_eZ()
        console.error('[状态] 辅助脚本停止')
    })
    drp_dJ.move_start.click(function () {
        drp_dJ.setAdjustEnabled(true)
        drp_dJ.move_start.attr('visibility', 'gone')
        drp_dJ.move_end.attr('visibility', 'visible')
    })
    drp_dJ.move_end.click(function () {
        drp_dJ.setAdjustEnabled(false)
        drp_dJ.move_start.attr('visibility', 'visible')
        drp_dJ.move_end.attr('visibility', 'gone')
        var d = drp_dJ.getX(),
            f = drp_dJ.getY()
        drp_dI.put('floaty_position_x', d)
        drp_dI.put('floaty_position_y', f)
        console.warn('[提示] 悬浮窗位置已记录')
    })
    drp_dJ.type_settings.click(function () {
        'ui'
        const b = [
            '送到家',
            '到店取',
            '来回刷',
            '来回刷\uFF08到店取\uFF09',
            '来回刷\uFF08送到家\uFF09',
        ]
        var c = b.indexOf(drp_cR)
        dialogs.singleChoice('请选择配送方案', b, c).then((d) => {
            switch (d) {
                case 0:
                    drp_cR = '送到家'
                    break
                case 1:
                    drp_cR = '到店取'
                    break
                case 2:
                    drp_cR = '来回刷'
                    break
                case 3:
                    drp_cR = '来回刷\uFF08到店取\uFF09'
                    break
                case 4:
                    drp_cR = '来回刷\uFF08送到家\uFF09'
                    break
            }
            console.info('目前的购买方案为: ', drp_cR)
            console.info('如果已在运行状态\uFF0C请停止后重新运行')
        })
    })
    drp_dJ.number_settings.click(function () {
        'ui'
        const b = ['1', '2', '手动输入']
        dialogs.singleChoice('请选择购买数量', b).then((c) => {
            c === 2
                ? dialogs.rawInput('请输入购买数量', drp_cS).then((h) => {
                    parseInt(h) > 0
                        ? ((drp_cS = parseInt(h)),
                            console.info('目前的购买数量为: ', drp_cS),
                            console.info('如果已在运行状态\uFF0C请停止后重新运行'))
                        : console.info('请输入正整数, [', h, ']不符合规范')
                })
                : ((drp_cS = c + 1),
                    console.info('目前的购买数量为: ', drp_cS),
                    console.info('如果已在运行状态\uFF0C请停止后重新运行'))
        })
    })
    var drp_dK = drp_dI.get('floaty_position_x'),
        drp_dL = drp_dI.get('floaty_position_y'),
        drp_dM = device.width / 2 + 100,
        drp_dN = drp_dJ.getY() + 100
    drp_do &&
        ui.post(() => {
            drp_eY()
        })
    typeof drp_dK === 'number' &&
        typeof drp_dL === 'number' &&
        drp_dK >= 0 &&
        drp_dK + 100 <= device.width
        ? (console.warn('[提示] 悬浮窗位置已读取'),
            drp_dJ.setPosition(drp_dK, drp_dL))
        : drp_dJ.setPosition(drp_dM, drp_dN)
} else {
    var drp_dI = storages.create('DRP')
    if (drp_dd) {
        var drp_dJ = drp_bP
        drp_dJ.setTouchable(true)
        var drp_cQ = 0
        let drp_ff,
            drp_fg,
            drp_fh,
            drp_fi,
            drp_fj = 0
        const drp_fk = 200,
            drp_fl = 600,
            drp_fm = 10
        let drp_fn,
            drp_fo = false
        drp_dJ.drag.setOnTouchListener(function (a, b) {
            switch (b.getAction()) {
                case b.ACTION_DOWN:
                    ; (drp_ff = b.getRawX()),
                        (drp_fg = b.getRawY()),
                        (drp_fh = drp_dJ.getX()),
                        (drp_fi = drp_dJ.getY()),
                        (drp_fj = new Date().getTime()),
                        (drp_fn = setTimeout(() => {
                            drp_fo = true
                            drp_fp()
                        }, drp_fl))
                    return true
                case b.ACTION_MOVE:
                    let d = b.getRawX() - drp_ff,
                        f = b.getRawY() - drp_fg
                    drp_dJ.setPosition(drp_fh + d, drp_fi + f)
                        ; (Math.abs(d) > drp_fm || Math.abs(f) > drp_fm) &&
                            (clearTimeout(drp_fn), (drp_fo = false))
                    return true
                case b.ACTION_UP:
                    let g = new Date().getTime()
                    if (g - drp_fj < drp_fk) {
                        drp_fq()
                        drp_fo = false
                        clearTimeout(drp_fn)
                    }
                    return true
            }
            return false
        })
        function drp_fp() {
            try {
                if (!drp_dO) {
                    drp_dO = drp_fa()
                    var f = String(device.width * 0.8) + 'px'
                    var d = String(device.height * 0.8) + 'px'
                    drp_dO.config_main.attr('w', f)
                    drp_dO.config_main.attr('h', d)
                    sleep(500)
                }
                drp_fd()
            } catch (g) {
                log('Error in config button click: ' + g)
            }
        }
        function drp_fq() {
            if (drp_cQ == 1) {
                console.error('[状态] 辅助脚本停止')
                drp_dJ.text_status.setText('启动')
                try {
                    drp_dJ.drag.attr('tint', '#66ccff')
                } catch (f) {
                    console.error('Failed to set image tint:', f)
                }
                drp_cQ = 0
            } else {
                console.error('[状态] 辅助脚本启动')
                if (!drp_dj) {
                    console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot1和微信')
                    drp_dj = true
                }
                drp_dJ.text_status.setText('停止')
                try {
                    drp_dJ.drag.attr('tint', '#FF4444')
                } catch (j) {
                    console.error('Failed to set image tint:', j)
                }
                drp_cQ = 1
            }
        }
        drp_do &&
            ui.post(() => {
                drp_fq()
            })
    } else {
        var drp_dJ = drp_bQ
        drp_dJ.main_window.attr('alpha', drp_d1)
        function drp_fr() {
            drp_cQ = 1
            drp_dJ.end.attr('visibility', 'visible')
            drp_dJ.start.attr('visibility', 'gone')
        }
        drp_do &&
            ui.post(() => {
                drp_fr()
            })
        function drp_fs() {
            drp_cQ = 0
            drp_dJ.end.attr('visibility', 'gone')
            drp_dJ.start.attr('visibility', 'visible')
        }
        drp_dJ.start.click(function () {
            drp_fr()
            console.error('[状态] 辅助脚本启动')
            !drp_dj &&
                (console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot1和微信'),
                    (drp_dj = true))
        })
        drp_dJ.end.click(function () {
            drp_fs()
            console.error('[状态] 辅助脚本停止')
        })
        drp_dJ.move_start.click(function () {
            drp_dJ.setAdjustEnabled(true)
            drp_dJ.move_start.attr('visibility', 'gone')
            drp_dJ.move_end.attr('visibility', 'visible')
        })
        drp_dJ.move_end.click(function () {
            drp_dJ.setAdjustEnabled(false)
            drp_dJ.move_start.attr('visibility', 'visible')
            drp_dJ.move_end.attr('visibility', 'gone')
            var d = drp_dJ.getX(),
                f = drp_dJ.getY()
            drp_dI.put('floaty_position_x', d)
            drp_dI.put('floaty_position_y', f)
            console.warn('[提示] 悬浮窗位置已记录')
        })
    }
    var drp_dO = null,
        drp_dP = false
    function drp_f0() {
        var b = {
            purchase_type: drp_cR,
            purchase_count: drp_cS,
            specs: drp_cT,
            refresh_delay: drp_cU,
            enable_random_delay: drp_da,
            extra_delay: drp_cV,
            ack_delay: drp_cX,
            ignore_ack: drp_db,
            special_confirm_delay: drp_d8,
            ignore_ack_click_delay: drp_d2,
            random_refresh_delay_lower: drp_cZ,
            random_refresh_delay_upper: drp_d0,
            max_refresh_time: drp_cW,
            rage_stock_refresh: drp_df,
            legacy_refresh: drp_dr,
            vibrate_time: drp_d7,
            main_window_alpha: drp_d1,
            auto_click_notification: drp_cY,
            reset_floaty_position: drp_d9,
        }
        return (
            (b.extra_selection_regex = drp_dh),
            (b.payment_password = drp_di),
            (b.shield_breaker_mode = drp_dk),
            (b.panic_timer = drp_dl),
            b
        )
    }
    function drp_f1(b) {
        drp_cR = b.purchase_type
        drp_cS = b.purchase_count
        drp_cT = b.specs
        drp_cU = b.refresh_delay
        drp_da = b.enable_random_delay
        drp_cV = b.extra_delay
        drp_cX = b.ack_delay
        drp_db = b.ignore_ack
        drp_d8 = b.special_confirm_delay
        drp_d2 = b.ignore_ack_click_delay
        drp_cZ = b.random_refresh_delay_lower
        drp_d0 = b.random_refresh_delay_upper
        drp_cW = b.max_refresh_time
        drp_df = b.rage_stock_refresh
        drp_dr = b.legacy_refresh !== undefined ? b.legacy_refresh : false
        drp_d7 = b.vibrate_time
        drp_d1 = b.main_window_alpha
        drp_cY = b.auto_click_notification
        drp_d9 = b.reset_floaty_position
        drp_dh =
            b.extra_selection_regex !== undefined ? b.extra_selection_regex : ''
        drp_di = b.payment_password !== undefined ? b.payment_password : ''
        drp_dk = b.shield_breaker_mode !== undefined ? b.shield_breaker_mode : false
        drp_dl = b.panic_timer !== undefined ? b.panic_timer : 0
        drp_dJ && drp_dJ.main_window && drp_dJ.main_window.attr('alpha', drp_d1)
    }
    function drp_f2(a) {
        var f = drp_f0()
        var g = drp_f5(a)
        drp_dI.put('preset_' + a, JSON.stringify(f))
        console.info('\uD83D\uDCC1 配置已保存到 ' + g + ' (槽位 ' + a + ')')
        toast('配置已保存到 ' + g)
    }
    function drp_f3(a) {
        var c = drp_dI.get('preset_' + a)
        if (c) {
            try {
                var g = JSON.parse(c)
                var h = drp_f5(a)
                drp_f1(g)
                drp_fe()
                console.info('\uD83D\uDCC1 配置已从 ' + h + ' (槽位 ' + a + ') 加载')
                toast('配置已从 ' + h + ' 加载')
                return true
            } catch (l) {
                return console.error('加载预设失败: ' + l), toast('加载预设失败'), false
            }
        }
        return false
    }
    function drp_f4(b) {
        var f = drp_dI.get('preset_' + b)
        return f && f.length > 0
    }
    function drp_f5(b) {
        var f = drp_dI.get('preset_name_' + b)
        return f || '预设 ' + b
    }
    function drp_f6(b, c) {
        c && c.trim().length > 0
            ? drp_dI.put('preset_name_' + b, c.trim())
            : drp_dI.remove('preset_name_' + b)
    }
    function drp_f7(a) {
        var f = drp_f5(a)
        drp_dI.remove('preset_' + a)
        drp_dI.remove('preset_name_' + a)
        console.info('\uD83D\uDDD1️ 已删除预设: ' + f + ' (槽位 ' + a + ')')
        toast('已删除预设: ' + f)
    }
    function drp_f8() {
        drp_fc()
        var b = []
        for (var c = 1; c <= 5; c++) {
            var d = drp_f4(c),
                f = drp_f5(c),
                g = d ? ' \u2713' : ' (空)',
                h = d ? '\uD83D\uDCC1' : '\uD83D\uDCC2'
            b.push(h + ' ' + f + g)
        }
        b.push('\uD83D\uDD19 返回配置')
        dialogs.select('选择预设槽位', b).then((j) => {
            if (j === -1) {
                drp_fb()
                return
            }
            if (j === 5) {
                drp_fb()
                return
            }
            var l = j + 1
            drp_f9(l)
        })
    }
    function drp_f9(a) {
        var c = drp_f4(a),
            d = drp_f5(a),
            f = []
        f.push('\uD83D\uDCBE 保存当前配置')
        f.push('\u270F️ 重命名预设')
        c && (f.push('\uD83D\uDCC2 加载此预设'), f.push('\uD83D\uDDD1️ 删除此预设'))
        f.push('\uD83D\uDD19 返回预设列表')
        var g = d + (c ? ' \u2713' : ' (空)')
        dialogs.select(g, f).then((h) => {
            if (h === -1) {
                drp_f8()
                return
            }
            var k = f[h]
            if (k === '\uD83D\uDCBE 保存当前配置') {
                dialogs
                    .confirm(
                        '确认保存',
                        '确定要将当前配置保存到 ' +
                        d +
                        ' 吗\uFF1F' +
                        (c ? '\n\n\u26A0️ 这将覆盖现有配置' : '')
                    )
                    .then((p) => {
                        p && drp_f2(a), drp_fb()
                    })
            } else {
                if (k === '\uD83D\uDCC2 加载此预设') {
                    dialogs
                        .confirm(
                            '确认加载',
                            '确定要加载 ' + d + ' 的配置吗\uFF1F\n\n\u26A0️ 当前配置将被覆盖'
                        )
                        .then((p) => {
                            p && drp_f3(a)
                            drp_fb()
                        })
                } else {
                    if (k === '\u270F️ 重命名预设') {
                        var l = drp_f5(a),
                            m = '预设 ' + a,
                            n = l === m ? '' : l
                        dialogs
                            .rawInput('重命名预设\uFF08留空恢复默认\uFF09', n, '')
                            .then((p) => {
                                if (p !== null) {
                                    drp_f6(a, p)
                                    var q = p && p.trim().length > 0 ? p.trim() : m
                                    console.info('\uD83D\uDCDD 预设 ' + a + ' 已重命名为: ' + q)
                                    toast('预设已重命名为: ' + q)
                                }
                                drp_f9(a)
                            })
                    } else {
                        k === '\uD83D\uDDD1️ 删除此预设'
                            ? dialogs
                                .confirm(
                                    '确认删除',
                                    '确定要删除 ' + d + ' 吗\uFF1F\n\n\u26A0️ 此操作不可恢复'
                                )
                                .then((p) => {
                                    p && drp_f7(a)
                                    drp_f8()
                                })
                            : drp_f8()
                    }
                }
            }
        })
    }
    function drp_fa() {
        try {
            drp_dO = drp_bR
            if (!drp_dO) {
                return
            }
            drp_dO.setPosition(-10000, -10000)
            drp_dO.setTouchable(false)
            drp_dP = false
        } catch (c) {
            log('Error creating config window: ' + c)
            drp_dO = null
            return
        }
        drp_dO.ignore_ack_config.click(function () {
            ; (drp_db = !drp_db),
                console.info(
                    '\uD83D\uDEAB 特殊刷回流模式已设置为: ',
                    drp_db ? '开启' : '关闭'
                ),
                drp_fe()
        })
        drp_dO.delivery_type_config.click(function () {
            drp_fc()
            dialogs
                .select('请选择配送方案', [
                    '送到家',
                    '到店取',
                    '来回刷',
                    '来回刷\uFF08到店取\uFF09',
                    '来回刷\uFF08送到家\uFF09',
                ])
                .then((d) => {
                    if (d !== -1) {
                        switch (d) {
                            case 0:
                                drp_cR = '送到家'
                                break
                            case 1:
                                drp_cR = '到店取'
                                break
                            case 2:
                                drp_cR = '来回刷'
                                break
                            case 3:
                                drp_cR = '来回刷\uFF08到店取\uFF09'
                                break
                            case 4:
                                drp_cR = '来回刷\uFF08送到家\uFF09'
                                break
                        }
                        console.info('配送方案已设置为: ', drp_cR)
                        drp_fe()
                    }
                    drp_fb()
                })
        })
        drp_dO.delivery_number_config.click(function () {
            drp_fc()
            const d = ['1', '2', '手动输入']
            dialogs.singleChoice('请选择购买数量', d).then((f) => {
                f === 2
                    ? dialogs.rawInput('请输入购买数量', drp_cS).then((j) => {
                        if (parseInt(j) > 0) {
                            drp_cS = parseInt(j)
                            console.info('购买数量已设置为: ', drp_cS)
                            drp_fe()
                        } else {
                            console.info('请输入正整数, [', j, ']不符合规范')
                        }
                        drp_fb()
                    })
                    : ((drp_cS = f + 1),
                        console.info('购买数量已设置为: ', drp_cS),
                        drp_fe(),
                        drp_fb())
            })
        })
        drp_dO.specs_config.click(function () {
            drp_fc()
            dialogs.select('请选择规格', ['单个', '整盒']).then((g) => {
                g !== -1 &&
                    ((drp_cT = g === 0 ? '单个' : '整盒'),
                        console.info('规格已设置为: ', drp_cT),
                        drp_fe()),
                    drp_fb()
            })
        })
        drp_dO.refresh_delay_config.click(function () {
            drp_fc()
            dialogs.rawInput('请输入库存刷新延迟 (毫秒)', drp_cU).then((f) => {
                var g = parseInt(f)
                g >= 0
                    ? (drp_cG
                        ? ((drp_cU = 1000),
                            console.log('\uD83D\uDEAB 试用期不支持修改库存刷新延迟'))
                        : ((drp_cU = g),
                            console.info('\u23F1️ 库存刷新延迟已设置为: ', drp_cU + 'ms')),
                        drp_fe())
                    : console.info('请输入非负整数')
                drp_fb()
            })
        })
        drp_dO.enable_random_delay_config.click(function () {
            drp_da = !drp_da
            console.info(
                '\uD83C\uDFB2 启用额外随机库存刷新间隔已设置为: ',
                drp_da ? '开启' : '关闭'
            )
            drp_fe()
        })
        drp_dO.extra_delay_config.click(function () {
            drp_fc()
            dialogs.rawInput('请输入主动操作延迟 (毫秒)', drp_cV).then((f) => {
                var g = parseInt(f)
                g >= 0
                    ? ((drp_cV = g),
                        console.info('主动操作延迟已设置为: ', drp_cV + 'ms'),
                        drp_fe())
                    : console.info('请输入非负整数')
                drp_fb()
            })
        })
        drp_dO.ack_delay_config.click(function () {
            drp_fc()
            dialogs
                .rawInput('请输入点击[我知道了]后等待的延迟 (毫秒)', drp_cX)
                .then((g) => {
                    var h = parseInt(g)
                    h >= 0
                        ? ((drp_cX = h),
                            console.info(f.pozVD, f.PQzGc(drp_cX, 'ms')),
                            drp_fe())
                        : console.info('请输入非负整数')
                    drp_fb()
                })
        })
        drp_dO.special_confirm_delay_config.click(function () {
            drp_fc()
            dialogs
                .rawInput('请输入特殊刷回流点击确认延迟 (毫秒)', drp_d8)
                .then((d) => {
                    var f = parseInt(d)
                    f >= 0
                        ? ((drp_d8 = f),
                            console.info(
                                '\u2B50 特殊刷回流点击确认延迟已设置为: ',
                                drp_d8 + 'ms'
                            ),
                            drp_fe())
                        : console.info('请输入非负整数')
                    drp_fb()
                })
        })
        drp_dO.ignore_ack_click_delay_config.click(function () {
            drp_fc()
            dialogs.rawInput('请输入特殊刷回流点击延迟 (毫秒)', drp_d2).then((d) => {
                var f = parseInt(d)
                f >= 0
                    ? ((drp_d2 = f),
                        console.info('\u23F0 特殊刷回流点击延迟已设置为: ', drp_d2 + 'ms'),
                        drp_fe())
                    : console.info('请输入非负整数')
                drp_fb()
            })
        })
        drp_dO.random_delay_lower_config.click(function () {
            drp_fc()
            dialogs.rawInput('请输入随机延迟下限 (毫秒)', drp_cZ).then((f) => {
                var g = parseInt(f)
                g >= 1
                    ? ((drp_cZ = g),
                        console.info('\u2B07️ 随机延迟下限已设置为: ', drp_cZ + 'ms'),
                        drp_fe())
                    : console.info('请输入大于0的整数')
                drp_fb()
            })
        })
        drp_dO.random_delay_upper_config.click(function () {
            drp_fc()
            dialogs.rawInput('请输入随机延迟上限 (毫秒)', drp_d0).then((f) => {
                var g = parseInt(f)
                g >= 1
                    ? ((drp_d0 = g),
                        console.info('\u2B06️ 随机延迟上限已设置为: ', drp_d0 + 'ms'),
                        drp_fe())
                    : console.info('请输入大于0的整数')
                drp_fb()
            })
        })
        drp_dO.max_refresh_time_config.click(function () {
            drp_fc()
            dialogs.rawInput('请输入最大刷新时间 (分钟)', drp_cW).then((d) => {
                var h = parseFloat(d)
                if (h >= 0) {
                    drp_cW = h
                    console.info('最大刷新时间已设置为: ', drp_cW + '分钟')
                    drp_fe()
                } else {
                    console.info('请输入非负数')
                }
                drp_fb()
            })
        })
        return (
            drp_dO.rage_stock_refresh_config.click(function () {
                drp_df = !drp_df
                console.info(
                    '\u26A1 狂暴库存刷新模式已设置为: ',
                    drp_df ? '开启' : '关闭'
                )
                drp_fe()
            }),
            drp_dO.legacy_refresh_config.click(function () {
                drp_dr = !drp_dr
                console.info(
                    '\uD83D\uDD04 上下刷新模式已设置为: ',
                    drp_dr ? '开启' : '关闭'
                )
                drp_fe()
            }),
            drp_dO.vibrate_time_config.click(function () {
                drp_fc()
                dialogs.rawInput('请输入抢购成功振动时长 (毫秒)', drp_d7).then((d) => {
                    var f = parseInt(d)
                    f >= 0
                        ? ((drp_d7 = f),
                            console.info('抢购成功振动时长已设置为: ', drp_d7 + 'ms'),
                            drp_fe())
                        : console.info('请输入非负整数')
                    drp_fb()
                })
            }),
            drp_dO.main_window_alpha_config.click(function () {
                drp_fc()
                dialogs.rawInput('请输入窗口透明度 (0.0-1.0)', drp_d1).then((g) => {
                    var h = parseFloat(g)
                    h >= 0 && h <= 1
                        ? ((drp_d1 = h),
                            drp_dJ.main_window.attr('alpha', drp_d1),
                            console.info('\uD83D\uDD0D 窗口透明度已设置为: ', drp_d1),
                            drp_fe())
                        : console.info('请输入0.0到1.0之间的数值')
                    drp_fb()
                })
            }),
            drp_dO.auto_click_notification_config.click(function () {
                drp_cY = !drp_cY
                console.info(
                    '\uD83D\uDD14 自动点击到货通知已设置为: ',
                    drp_cY ? '开启' : '关闭'
                )
                drp_fe()
            }),
            drp_dO.reset_floaty_position_config.click(function () {
                drp_d9 = !drp_d9
                console.info(
                    '\uD83D\uDD04 重置悬浮窗位置已设置为: ',
                    drp_d9 ? '开启' : '关闭'
                )
                drp_fe()
            }),
            drp_dO.extra_selection_regex_config.click(function () {
                drp_fc()
                dialogs
                    .rawInput(
                        '请输入额外选择规则 (支持 | 或 \uFF5C 分隔\uFF0C如: A组|7.29\uFF5C黑)',
                        drp_dh || ''
                    )
                    .then((f) => {
                        f !== null &&
                            ((drp_dh = f.trim()),
                                drp_dh.length > 0
                                    ? console.info('\uD83D\uDD24 额外选择规则已设置为: ', drp_dh)
                                    : console.info('\uD83D\uDD24 额外选择规则已清空'),
                                drp_fe())
                        drp_fb()
                    })
            }),
            drp_dO.shield_breaker_mode_config.click(function () {
                drp_dk = !drp_dk
                console.info(
                    '\uD83D\uDEE1️ 破盾模式已设置为: ',
                    drp_dk ? '开启' : '关闭'
                )
                drp_fe()
            }),
            drp_dO.ignore_ack_panic_timer_config.click(function () {
                drp_fc()
                dialogs
                    .rawInput('请输入自动关闭特殊刷回流时间 (秒\uFF0C0表示关闭)', drp_dm)
                    .then((f) => {
                        var g = parseInt(f)
                        g >= 0
                            ? ((drp_dm = g),
                                drp_dm > 0
                                    ? console.info(
                                        '\u23F0 自动关闭特殊刷回流时间已设置为: ',
                                        drp_dm + '秒'
                                    )
                                    : console.info('\u23F0 自动关闭特殊刷回流已关闭'),
                                drp_fe())
                            : console.info('请输入非负整数')
                        drp_fb()
                    })
            }),
            drp_dO.panic_timer_config.click(function () {
                drp_fc()
                dialogs
                    .rawInput('请输入自动关闭破盾模式时间 (秒\uFF0C0表示关闭)', drp_dl)
                    .then((f) => {
                        var g = parseInt(f)
                        g >= 0
                            ? ((drp_dl = g),
                                drp_dl > 0
                                    ? console.info(
                                        '\u23F0 自动关闭破盾模式时间已设置为: ',
                                        drp_dl + '秒'
                                    )
                                    : console.info('\u23F0 自动关闭破盾模式已关闭'),
                                drp_fe())
                            : console.info('请输入非负整数')
                        drp_fb()
                    })
            }),
            drp_dO.payment_password_config.click(function () {
                drp_fc()
                dialogs.rawInput('请输入6位支付密码', drp_di || '').then((d) => {
                    if (d !== null) {
                        let f = d.trim()
                        f.length === 6 && /^\d{6}$/.test(f)
                            ? ((drp_di = f),
                                console.info('\uD83D\uDD12 支付密码已设置为: ', drp_di),
                                drp_fe())
                            : (console.error('\u274C 支付密码必须是6位数字\uFF0C请重新输入'),
                                dialogs.alert(
                                    '密码格式错误',
                                    '支付密码必须是6位数字\uFF0C请重新设置'
                                ))
                    }
                    drp_fb()
                })
            }),
            drp_dO.close_config.click(function () {
                drp_fc()
            }),
            drp_dO.preset_config.click(function () {
                drp_f8()
            }),
            drp_dO
        )
    }
    function drp_fb() {
        if (drp_dO && !drp_dP) {
            try {
                ui.post(() => {
                    var d = Math.floor(device.width * 0.8) + 'px',
                        f = Math.floor(device.height * 0.8) + 'px'
                    drp_dO.config_main.attr('w', d)
                    drp_dO.config_main.attr('h', f)
                    var d = device.width * 0.8 || device.width * 0.8,
                        f = device.height * 0.8 || device.height * 0.8,
                        g = Math.floor(device.width / 2 - d / 2),
                        h = Math.floor(device.height / 2 - f / 2)
                    drp_dO.setPosition(g, h)
                    drp_dO.setTouchable(true)
                    drp_dP = true
                })
                drp_fe()
            } catch (d) {
                log('Error showing config window: ' + d)
            }
        }
    }
    function drp_fc() {
        if (drp_dO && drp_dP) {
            try {
                ui.post(() => {
                    drp_dO.setPosition(-10000, -10000)
                    drp_dO.setTouchable(false)
                    drp_dP = false
                })
            } catch (d) {
                log('Error hiding config window: ' + d)
            }
        }
    }
    function drp_fd() {
        try {
            drp_dP ? drp_fc() : drp_fb()
        } catch (c) {
            log('Error toggling config window: ' + c)
        }
    }
    function drp_fe() {
        if (drp_dO) {
            if (drp_dt != 200) {
                return
            }
            try {
                drp_dO.delivery_type_config.setText(
                    '\uD83D\uDE9A 配送方式: ' + (drp_cR || '到店取')
                )
                drp_dO.delivery_number_config.setText(
                    '\uD83D\uDCE6 配送数量: ' + (drp_cS || 1)
                )
                drp_dO.specs_config.setText('\uD83D\uDCCF 规格: ' + (drp_cT || '单个'))
                drp_dO.refresh_delay_config.setText(
                    '\u23F1️ 库存刷新刷新延迟: ' + drp_cU + 'ms'
                )
                drp_dO.enable_random_delay_config.setText(
                    '\uD83C\uDFB2 启用额外随机库存刷新间隔: ' + (drp_da ? '开启' : '关闭')
                )
                drp_dO.extra_delay_config.setText(
                    '\u23F0 主动操作延迟: ' + drp_cV + 'ms'
                )
                drp_dO.ack_delay_config.setText(
                    '\u2705 点击[我知道了]后等待的延迟: ' + drp_cX + 'ms'
                )
                drp_dO.ignore_ack_config.setText(
                    '\uD83D\uDEAB 特殊刷回流模式(不点击我知道了): ' +
                    (drp_db ? '开启' : '关闭')
                )
                drp_dO.special_confirm_delay_config.setText(
                    '\u2B50 特殊刷回流点击确认延迟: ' + drp_d8 + 'ms'
                )
                drp_dO.ignore_ack_click_delay_config.setText(
                    '\u23F0 特殊刷回流点击延迟: ' + drp_d2 + 'ms'
                )
                drp_dO.random_delay_lower_config.setText(
                    '\u2B07️ 随机延迟下限: ' + drp_cZ + 'ms'
                )
                drp_dO.random_delay_upper_config.setText(
                    '\u2B06️ 随机延迟上限: ' + drp_d0 + 'ms'
                )
                drp_dO.max_refresh_time_config.setText(
                    '\u231B 最大刷新时间: ' + drp_cW + '分钟'
                )
                drp_dO.rage_stock_refresh_config.setText(
                    '\u26A1 狂暴库存刷新模式: ' + (drp_df ? '开启' : '关闭')
                )
                drp_dO.legacy_refresh_config.setText(
                    '\uD83D\uDD04 上下刷新模式: ' + (drp_dr ? '开启' : '关闭')
                )
                drp_dO.vibrate_time_config.setText(
                    '\uD83D\uDCF3 抢购成功振动时长: ' + drp_d7 + 'ms'
                )
                drp_dO.main_window_alpha_config.setText(
                    '\uD83D\uDD0D 窗口透明度: ' + drp_d1
                )
                drp_dO.auto_click_notification_config.setText(
                    '\uD83D\uDD14 自动点击到货通知: ' + (drp_cY ? '开启' : '关闭')
                )
                drp_dO.reset_floaty_position_config.setText(
                    '\uD83D\uDD04 重置悬浮窗位置: ' + (drp_d9 ? '开启' : '关闭')
                )
                drp_dO.extra_selection_regex_config.setText(
                    '\uD83D\uDD24 额外选择规则: ' + (drp_dh || '未设置')
                )
                drp_dO.shield_breaker_mode_config.setText(
                    '\uD83D\uDEE1️ 破盾模式: ' + (drp_dk ? '开启' : '关闭')
                )
                drp_dO.ignore_ack_panic_timer_config.setText(
                    '\u23F0 自动关闭特殊刷回流: ' + (drp_dm > 0 ? drp_dm + '秒' : '关闭')
                )
                drp_dO.panic_timer_config.setText(
                    '\u23F0 自动关闭破盾模式: ' + (drp_dl > 0 ? drp_dl + '秒' : '关闭')
                )
                drp_dO.payment_password_config.setText(
                    '\uD83D\uDD12 支付密码: ' + (drp_di || '未设置')
                )
            } catch (d) {
                log('Error updating config window: ' + d)
            }
        }
    }
    !drp_dd &&
        drp_dJ.config_settings.click(function () {
            ui.post(() => {
                try {
                    if (!drp_dO) {
                        drp_dO = drp_fa()
                        drp_fe()
                        var b = String(device.width * 0.8) + 'px',
                            c = String(device.height * 0.8) + 'px'
                        drp_dO.config_main.attr('w', b)
                        drp_dO.config_main.attr('h', c)
                        sleep(500)
                    }
                    drp_fd()
                } catch (d) {
                    log('Error in config button click: ' + d)
                }
            })
        })
    var drp_dK = drp_dI.get('floaty_position_x'),
        drp_dL = drp_dI.get('floaty_position_y'),
        drp_dM = device.width / 2 + 100,
        drp_dN = drp_dJ.getY() + 100
    typeof drp_dK === 'number' &&
        typeof drp_dL === 'number' &&
        drp_dK >= 0 &&
        drp_dK + 100 <= device.width &&
        !drp_d9
        ? (console.warn('[提示] 悬浮窗位置已读取'),
            drp_dJ.setPosition(drp_dK, drp_dL))
        : (console.warn('[提示] 已使用默认悬浮窗位置'),
            drp_dJ.setPosition(drp_dM, drp_dN))
    var drp_dO = drp_fa()
}
function drp_dQ(b) {
    var f = b.findOne(text('购买方式'))
    if (!f) {
        return console.log('Exit button not found'), null
    }
    var g = f.parent()
    if (!g) {
        return console.log('Parent1 not found'), null
    }
    var h = g.parent()
    if (!h) {
        return console.log('Parent2 not found'), null
    }
    var j = h.parent()
    if (!j) {
        return console.log('Exit button parent not found'), null
    }
    var k = j.child(0)
    if (!k) {
        return console.log('Exit button child not found'), null
    }
    if (k.className() !== 'android.widget.Image') {
        return console.log('Exit button child is not an Image'), null
    }
    return k
}
var drp_dR = drp_dH,
    drp_dS = 1984
function drp_dT() {
    var d = className('android.widget.TextView').text('到货通知').findOne(50)
    if (d) {
        console.warn('[操作] 已点击到货通知按钮')
        d.click()
    }
}
var drp_dU =
    'yRFxy902vYq9Kotiy4bU6LIWIx1TlMc07SKjZNXIeV3wAkXEMhzvwlY9y1ekT6C7dp4rvWSlAnUbAMeFOrXUq87xvFnA4U4ftGg3TRLG0{SV{tEy,:m*PNMHFupL79ugesPUPOHhOw=='
drp_dS = drp_dS + drp_dt
function drp_dV(b, c) {
    let g = b
    let h = 0
    while (g != null && h < c) {
        try {
            g = g.child(0)
        } catch (j) {
            return log('Exception at level ' + h + ': ' + j), null
        }
        h++
    }
    return g
}
var drp_dW = drp_dS != 1984,
    drp_dX = threads
function drp_dY(a) {
    var d = null,
        f = a
    for (var g = 0; g < 13; g++) {
        if (f == null) {
            break
        }
        f.className() === 'android.widget.RelativeLayout' && (d = f)
        f && (f = f.parent())
    }
    drp_dt + 1 != 201 && drp_c0()
    if (d != null) {
        f = d
        for (var g = 0; g < 2; g++) {
            if (f == null) {
                break
            }
            f = f.parent()
        }
        if (f != null) {
            let h = f.bounds()
        } else {
            log('Top node is null after going up 3 parents.')
        }
    } else {
        log('No RelativeLayout found in 13 levels.')
    }
    return f
}
!drp_dW &&
    drp_dX.start(function () {
        while (true) {
            drp_cQ = 0
        }
    })
function drp_dZ(a) {
    if (!a) {
        return 'no_header'
    }
    if (a.childCount() === 0) {
        return 'no_header'
    }
    var c = a.child(0)
    if (!c) {
        return 'no_header'
    }
    if (c.className() !== 'android.widget.RelativeLayout') {
        return 'no_header'
    }
    var d = c.children()
    if (!d || d.length === 0) {
        return ''
    }
    if (drp_dS - 1984 != 200) {
        return 'no_header'
    }
    var f = 0,
        g = d[0]
    for (var h = 0; h < d.length; h++) {
        var j = d[h],
            k = j ? j.drawingOrder() : 0
        k > f && j.childCount() != 0 && ((f = k), (g = j))
    }
    if (!g) {
        return ''
    }
    var l = g && g.childCount() > 0 ? g.child(0) : null
    if (!l) {
        return ''
    }
    var m = l.findOne(className('android.widget.TextView').algorithm('BFS'))
    if (!m) {
        return ''
    }
    return m.text()
}
function drp_e0() {
    var b = className('android.widget.RelativeLayout')
        .algorithm('BFS')
        .findOne(100)
    if (!b) {
        return null
    }
    if (!b.parent()) {
        return null
    }
    var c = b.parent()
    if (!c) {
        return null
    }
    if (!c.parent()) {
        return null
    }
    return (b = c.parent()), b
}
function drp_e1(a) {
    var b = a.bounds(),
        c = b.centerX()
    var d = b.centerY()
    click(c, d)
}
function drp_e2() {
    if (drp_e6 == -1 || drp_e7 == -1) {
        return
    }
    click(drp_e6, drp_e7)
    sleep(200)
}
function drp_e3(b) {
    if (drp_e6 != -1 && drp_e7 != -1) {
        return
    }
    var f = b.bounds(),
        g = device.width,
        h = device.height,
        j = f.centerX(),
        k = f.centerY()
    if (j < 0 || j > g || k < 0 || k > h) {
        return
    }
    drp_e6 = j
    drp_e7 = k
    var l = storages.create('DRP')
    l.put('unstuck_cap_btn_x', drp_e6)
    l.put('unstuck_cap_btn_y', drp_e7)
}
var drp_e4 = drp_c5
function drp_e5() {
    var a = storages.create('DRP')
    drp_e6 = a.get('unstuck_cap_btn_x', -1)
    drp_e7 = a.get('unstuck_cap_btn_y', -1)
    if (drp_e6 != -1 && drp_e7 != -1) {
        return
    }
    drp_e6 = -1
    drp_e7 = -1
}
var drp_e6 = -1,
    drp_e7 = -1
drp_e5()
!drp_dR && drp_e4()
function drp_e8(a) {
    var c = a.childCount()
    if (c == 0) {
        return null
    }
    drp_cm && console.error('webview_count: ' + a.childCount())
    var d = 0,
        f = c - 1,
        g = false
    for (var h = 0; h < c; h++) {
        var j = a.child(h),
            k = drp_dZ(j),
            l = j ? j.drawingOrder() : 0
        if (l === 0) {
            g = true
            break
        }
        l > d && ((d = l), (f = h))
    }
    if (g) {
        return a.child(c - 1)
    }
    return a.child(f)
}
function drp_e9(a) {
    return a.findOne(className('android.webkit.WebView').algorithm('DFS')) || null
}
function drp_ea(a) {
    if (!a) {
        return null
    }
    if (a.childCount() < 1) {
        return null
    }
    var c = a.child(0)
    if (!c) {
        return null
    }
    if (!drp_dR) {
        return null
    }
    if (c.className() !== 'android.widget.RelativeLayout') {
        return null
    }
    var d = null,
        f = Number.MAX_VALUE,
        g = c.childCount()
    for (var h = 0; h < g; h++) {
        var j = c.child(h)
        if (!j) {
            continue
        }
        var k = j.drawingOrder()
        if (k < f) {
            f = k
            d = j
        }
    }
    if (!d) {
        return null
    }
    if (d.childCount() < 1) {
        return null
    }
    var l = d.child(0)
    if (!l) {
        return null
    }
    if (!drp_dG) {
        return null
    }
    var m = null,
        n = l.childCount()
    for (var h = 0; h < n; h++) {
        var j = l.child(h)
        if (!j) {
            continue
        }
        if (j.drawingOrder() === 2) {
            m = j
            break
        }
    }
    if (!m) {
        return null
    }
    var o = m.child(0)
    if (!o || o.childCount() < 1) {
        return null
    }
    o = o.child(0)
    if (!o || o.childCount() < 1) {
        return null
    }
    o = o.child(0)
    if (!o || o.childCount() < 1) {
        return null
    }
    o = o.child(0)
    if (!o) {
        return null
    }
    var p = null,
        q = o.childCount()
    for (var h = 0; h < q; h++) {
        var j = o.child(h)
        if (!j) {
            continue
        }
        if (j.drawingOrder() === 0) {
            p = j
            break
        }
    }
    if (!p) {
        return null
    }
    if (p.childCount() < 1) {
        return null
    }
    var r = p.child(0)
    if (!r) {
        return null
    }
    if (r.className() === 'android.webkit.WebView') {
        return r
    }
    return null
}
function drp_eb(n, o) {
    if (!o) {
        var q = {}
        return (q.header = n), (q.status = 'no_webview'), q
    }
    if (drp_dt != 200) {
        return
    }
    if (n === '确认订单' || n === '访问异常\uFF0C请稍后重试') {
        var r = {}
        return (r.header = n), (r.status = 'confirm_and_pay'), r
    } else {
        if (n == '' || n != 'no_header') {
            var s = Date.now(),
                t = drp_ef(o)
            if (t) {
                var u = {}
                return (u.header = n), (u.status = 'purchase'), u
            }
            if (!drp_dH) {
                var v = {}
                return (v.header = n), (v.status = 'no_webview'), v
            }
            var z = drp_ee(o)
            if (z && z.text() == '立即购买') {
                var A = {}
                return (A.header = n), (A.status = 'info_page'), A
            } else {
                if (
                    z &&
                    (z.text().startsWith('距开售还剩') || z.text() == '参与抢购')
                ) {
                    var B = {}
                    return (B.header = n), (B.status = 'preorder'), B
                } else {
                    if (z && z.text().startsWith('距离开售时间还剩')) {
                        var C = {}
                        return (C.header = n), (C.status = 'presale'), C
                    }
                }
            }
            var D = o.findOne(textStartsWith('*您即将进入抢购'))
            if (D) {
                var E = {}
                return (E.header = n), (E.status = 'preorder'), E
            }
            var F = o.findOne(textStartsWith('继续等待'))
            if (F) {
                var G = {}
                return (G.header = n), (G.status = 'keep_waiting'), G
            }
            var H = {}
            return (H.header = n), (H.status = 'default'), H
        } else {
            var I = {}
            return (I.header = n), (I.status = 'default'), I
        }
    }
}
function drp_ec(a) {
    if (!a) {
        return
    }
    var c = a.findOne(
        className('android.widget.TextView').text('数量').algorithm('DFS')
    )
    if (!c) {
        return
    }
    var d = c.indexInParent(),
        f = c.parent()
    if (!f) {
        return
    }
    if (f.childCount() < d + 4) {
        return
    }
    var g = f.child(d + 3)
    if (!g) {
        return
    }
    g.click()
}
function drp_ed(a, b) {
    var d = a.findOne(
        className('android.widget.TextView').text('数量').algorithm('DFS')
    ),
        f = d.indexInParent(),
        g = d.parent()
    var h = g.child(f + 1),
        j = g.child(f + 2),
        k = g.child(f + 3),
        l = parseInt(j.text())
    if (isNaN(l)) {
        console.warn('无法处理购买数量: ' + j.text())
        return
    }
    var l = parseInt(j.text())
    if (l === b) {
        drp_dS < 2000 && (drp_cQ = 0)
        console.warn('[操作] 当前已满足购买数量要求: ' + l)
        return
    }
    if (l > b) {
        var m = l - b
        for (var n = 0; n < m; n++) {
            h.click(), sleep(10)
        }
    } else {
        var m = b - l
        for (var n = 0; n < m; n++) {
            k.click(), sleep(10)
        }
    }
}
function drp_ee(a) {
    if (!drp_dH) {
        return null
    }
    var c = null,
        d = a.childCount()
    for (var f = d - 1; f >= 0; f--) {
        try {
            var g = a.child(f)
        } catch (m) {
            break
        }
        if (!g) {
            break
        }
        if (g.className() === 'android.view.View') {
            c = g
            break
        }
    }
    if (!c) {
        return (
            drp_cm && (log('Cannot find last view.'), log('last_view is null')), null
        )
    }
    if (c.childCount() != 1 && c.childCount() != 2) {
        return drp_cm && log('last_view error: ' + c.childCount()), null
    }
    var h = c.child(c.childCount() - 1)
    if (!h || h.className() !== 'android.view.View') {
        return drp_cm && log('last_child is null or not android.view.View'), null
    }
    if (h.childCount() < 1) {
        return drp_cm && log('last_child does not have at least one child'), null
    }
    var j = h.child(h.childCount() - 1)
    if (!j || j.className() !== 'android.widget.TextView') {
        return (
            drp_cm &&
            log('last_child_last_child is null or not android.widget.TextView'),
            null
        )
    }
    return j
}
function drp_ef(a) {
    var c = null,
        d = a.childCount()
    for (var f = d - 1; f >= 0; f--) {
        try {
            var g = a.child(f)
        } catch (m) {
            break
        }
        if (!g) {
            break
        }
        if (g.className() === 'android.view.View') {
            c = g
            break
        }
    }
    if (!c) {
        return (
            drp_cm && (log('Cannot find last view.'), log('last_view is null')),
            sleep(30),
            null
        )
    }
    if (c.childCount() < 2) {
        return drp_cm && log('last_view has less than 2 children'), null
    }
    var h = c.child(c.childCount() - 1)
    if (!h || h.className() !== 'android.view.View') {
        return drp_cm && log('last_child is null or not android.view.View'), null
    }
    if (h.childCount() != 1) {
        return drp_cm && log('last_child does not have exactly 1 child'), null
    }
    var j = h.child(0)
    if (!j || j.className() !== 'android.view.View') {
        return drp_cm && log('last_child_0 is null or not android.view.View'), null
    }
    if (j.childCount() != 1) {
        return drp_cm && log('last_child_0 does not have exactly 1 child'), null
    }
    var k = j.child(0)
    if (!k || k.className() !== 'android.view.View') {
        return (
            drp_cm && log('last_child_0_0 is null or not android.view.View'), null
        )
    }
    if (k.childCount() != 3) {
        return (
            drp_cm && log('last_child_0_0 does not have exactly 3 children'), null
        )
    }
    var l = k.child(2)
    if (!l || l.className() !== 'android.view.View') {
        return (
            drp_cm && log('last_child_0_0_2 is null or not android.view.View'), null
        )
    }
    return l
}
function drp_eg(b) {
    var f = drp_ef(b)
    if (!f) {
        return null
    }
    if (f.childCount() == 1) {
        var g = f.child(0)
        if (g && g.text() == '确定') {
            return g
        }
    }
    return null
}
function drp_eh(b) {
    var f = drp_ef(b)
    if (!f) {
        return null
    }
    if (f.childCount() >= 2) {
        return true
    } else {
        if (f.childCount() == 1) {
            var g = f.child(0)
            if (g && g.text() == '该渠道暂不发售') {
                return true
            }
        }
    }
    return false
}
function drp_ei(a) {
    if (!drp_dR) {
        return null
    }
    if (!a) {
        return null
    }
    if (a.childCount() == 2) {
        var c = a.child(1)
        if (c && c.className() === 'android.view.View') {
            return c
        }
    }
    return null
}
var drp_ej = 0
function drp_ek() {
    while (true) {
        if (drp_cQ == 0) {
            sleep(200)
            continue
        }
        if (drp_eQ === null) {
            drp_ej++
        } else {
            drp_ej = 0
            sleep(100)
            continue
        }
        if (!drp_ey && drp_ej < 2) {
            sleep(100)
            continue
        }
        var b = textMatches(/付款方式|支付工具/).findOne(50)
        if (!b) {
            sleep(100)
            continue
        }
        drp_ey = false
        console.error('[页面检测] 当前处于支付页面')
        console.warn('[通知] 抢购完成! 祝老板大赚!')
        device.vibrate(drp_d7)
        let c = drp_di
        if (c.length != 6 || !/^\d{6}$/.test(c)) {
            sleep(500)
            continue
        }
        sleep(1000)
        console.error('[支付] 开始输入支付密码')
        for (let g = 0; g < c.length; g++) {
            let j = c[g],
                k = text(j).findOne(300)
            if (!k) {
                sleep(130)
                continue
            }
            k.click()
            sleep(200)
        }
        console.error('[支付] 支付密码输入完成')
        sleep(1000)
        let d = text('重试').findOne(300)
        d && (console.error('[支付] 支付失败'), sleep(1000))
    }
}
var drp_el = null,
    drp_el = threads.start(function () {
        drp_ek()
    })
function drp_em() {
    while (true) {
        if (drp_cQ == 0 || !drp_dk || drp_ev()) {
            sleep(200)
            continue
        }
        if (drp_eM && drp_eM.status != 'confirm_and_pay') {
            sleep(50)
            continue
        }
        try {
            var b = null,
                c = [drp_eN, drp_eO, drp_eP]
            for (var d of c) {
                if (!d) {
                    continue
                }
                var f = d.child(d.childCount() - 1)
                if (f && f.text() === '确认信息并支付') {
                    b = f
                    break
                }
            }
            if (b) {
                drp_eH++
                drp_eG = 0
                drp_eH >= 5
                    ? (drp_cm &&
                        console.error(
                            'clicked confirm_btn with cap_btn, retry count: ' + drp_eH
                        ),
                        console.error(
                            '多次尝试点击\u300C确认信息并支付\u300D失败\uFF0C使用后备方案\u3002'
                        ),
                        drp_e2())
                    : (b.click(),
                        drp_e3(b),
                        sleep(100),
                        drp_cm &&
                        console.error('clicked confirm_btn, retry count: ' + drp_eH))
                sleep(drp_cV)
                continue
            }
        } catch (m) {
            continue
        }
    }
}
function drp_en() {
    while (true) {
        if (drp_cQ == 0 || !drp_dk || drp_ev()) {
            sleep(200)
            continue
        }
        if (drp_eM && drp_eM.status != 'confirm_and_pay') {
            sleep(50)
            continue
        }
        try {
            var b = null,
                c = [drp_eN, drp_eO, drp_eP]
            for (var d of c) {
                if (!d || d.childCount() != 2) {
                    continue
                }
                var f = d.child(1)
                if (f && f.className() === 'android.view.View') {
                    if (f.childCount() == 1) {
                        var g = f.child(0)
                        if (g && g.className() === 'android.view.View') {
                            b = g.child(g.childCount() - 1)
                            break
                        }
                    }
                }
            }
            if (b && b.text() != '我知道了') {
                drp_eH = 0
                drp_eG == 0
                    ? ((drp_d3 = new Date().getTime()),
                        b.click(),
                        sleep(100),
                        drp_cm && console.error('clicked double_confirm'),
                        (drp_ey = true),
                        drp_eG++)
                    : (drp_eG++, sleep(20))
                continue
            }
        } catch (l) {
            continue
        }
    }
}
var drp_eo = null,
    drp_eo = threads.start(function () {
        drp_em()
    }),
    drp_ep = null,
    drp_ep = threads.start(function () {
        drp_en()
    })
function drp_eq() {
    var b = className('androidx.recyclerview.widget.RecyclerView').find()
    let c = 0
    while (b.length <= 1 && c < 50) {
        console.error('[控制] 正在等待消息加载')
        sleep(300)
        b = className('androidx.recyclerview.widget.RecyclerView').find()
        c++
    }
    !drp_dR && drp_c5()
    let d = b.length >= 2 ? 1 : 0
    for (let q = d; q >= 0; q--) {
        var f = b[q]
        sleep(300)
        drp_cm && log('trying recycler_view ' + q)
        if (!f) {
            continue
        }
        var g = f.child(f.childCount() - 1)
        if (!g || g.className() !== 'android.widget.RelativeLayout') {
            drp_cm &&
                (log('last_child not found for recycler_view ' + q),
                    g && log(g.className()))
            if (q === 0) {
                return
            }
            continue
        }
        break
    }
    if (!g) {
        return
    }
    var h = g.findOne(className('android.widget.FrameLayout'))
    if (!h) {
        drp_cm && log('frame_layout not found')
        return
    }
    var j = h.child(0)
    if (!j || j.className() !== 'android.widget.LinearLayout') {
        if (drp_cm) {
            log('linear_layout not found')
        }
        return
    }
    var k = j.child(0)
    if (!k || k.className() !== 'android.widget.LinearLayout') {
        drp_cm && log('child_of_linear_layout not found')
        return
    }
    if (k.childCount() != 4) {
        drp_cm && log('child_of_linear_layout does not have four children')
        return
    }
    var l = k.child(1)
    if (!l || l.className() !== 'android.widget.TextView') {
        if (drp_cm) {
            log('card_title not found')
        }
        return
    }
    var m = k.child(k.childCount() - 1)
    if (!m || m.className() !== 'android.widget.LinearLayout') {
        drp_cm && log('last_child_of_child_of_linear_layout not found')
        return
    }
    var n = l.text()
    if (!n) {
        drp_cm && log('card_title_text not found')
        return
    } else {
        drp_cm && log('card_title_text: ' + n)
    }
    var o = m.findOne(text('小程序'))
    if (!o) {
        drp_cm && log('text_in_last_child_of_child_of_linear_layout not found')
        return
    }
    h
        ? (h.click(),
            ui.post(() => {
                drp_et()
            }))
        : drp_cm && log('frame_layout not found')
}
function drp_er() {
    events.on('notification', function (c) {
        if (c.getPackageName() !== 'com.tencent.mm' || !c.getText()) {
            return
        }
        if (!drp_dq.some((m) => c.getTitle().includes(m))) {
            return
        }
        console.log('[控制] 收到来自监控群组[' + c.getTitle() + ']的通知')
        if (c.getText().includes('[小程序]')) {
            if (!device.isScreenOn()) {
                console.log('[控制] 屏幕未亮\uFF0C唤醒屏幕')
                device.wakeUp()
                sleep(400)
                while (!device.isScreenOn()) {
                    sleep(200)
                    device.wakeUp()
                }
                swipe(
                    device.width / 2,
                    device.height * 0.8,
                    device.width / 2,
                    device.height / 2,
                    300
                )
                console.log('[控制] 尝试解锁手机')
                sleep(500)
                c.click()
            } else {
                c.click()
            }
            drp_eq()
            return
        }
        var g = c.getText(),
            h = {}
        h['一'] = 1
        h['二'] = 2
        h['三'] = 3
        h['四'] = 4
        h['五'] = 5
        h['六'] = 6
        h['七'] = 7
        h['八'] = 8
        h['九'] = 9
        h['十'] = 10
        h['俩'] = 2
        h['两'] = 2
        var j = h
        g = g.replace(/^\[\d+条\].*?:|^.*?:/, '')
        var k = g.match(/\d+/)
        if (k) {
            drp_cS = parseInt(k[0])
            console.log('[控制] 已设置购买数量:', drp_cS)
        } else {
            var l = false
            for (let m in j) {
                if (g.includes(m)) {
                    drp_cS = j[m]
                    l = true
                    break
                }
            }
        }
        l && console.log('[控制] 已设置购买数量:', drp_cS)
        if (g.includes('店')) {
            drp_cR = '到店取'
            console.log('[控制] 已设置配送方式:', drp_cR)
        } else {
            g.includes('家') &&
                ((drp_cR = '送到家'), console.log('[控制] 已设置配送方式:', drp_cR))
        }
        if (g.includes('端') || g.includes('整盒')) {
            ; (drp_cT = '整盒'), console.log('[控制] 已设置规格:', drp_cT)
        } else {
            if (g.includes('盒') || g.includes('个')) {
                drp_cT = '单个'
                console.log('[控制] 已设置规格:', drp_cT)
            }
        }
        if (g.includes('启动') || g.includes('开')) {
            ui.post(() => {
                console.log('[控制] 已启动')
                drp_et()
            })
        } else {
            ; (g.includes('关') || g.includes('停') || g.includes('结束')) &&
                ui.post(() => {
                    console.log('[控制] 已停止并回到主界面')
                    drp_eu()
                    home()
                })
        }
    })
}
if (drp_dp) {
    var drp_es = threads.start(function () {
        drp_er()
    })
}
function drp_et() {
    drp_cQ = 1
    console.error('[状态] 辅助启动')
    if (drp_dc && drp_bO) {
        try {
            drp_bO.end.attr('visibility', 'visible')
            drp_bO.start.attr('visibility', 'gone')
        } catch (c) { }
    }
    if (drp_dd && drp_bP) {
        try {
            drp_bP.text_status.setText('停止')
            drp_bP.drag.attr('tint', '#FF4444')
        } catch (d) { }
    }
    if (!drp_dc && !drp_dd && drp_bQ) {
        try {
            drp_bQ.end.attr('visibility', 'visible'),
                drp_bQ.start.attr('visibility', 'gone')
        } catch (g) { }
    }
    !drp_dj &&
        (console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot1和微信'),
            (drp_dj = true))
}
function drp_eu() {
    drp_cQ = 0
    console.error('[状态] 辅助停止')
    if (drp_dc && drp_bO) {
        try {
            drp_bO.end.attr('visibility', 'gone')
            drp_bO.start.attr('visibility', 'visible')
        } catch (d) { }
    }
    if (drp_dd && drp_bP) {
        try {
            drp_bP.text_status.setText('启动')
            drp_bP.drag.attr('tint', '#66ccff')
        } catch (f) { }
    }
    if (!drp_dc && !drp_dd && drp_bQ) {
        try {
            drp_bQ.end.attr('visibility', 'gone')
            drp_bQ.start.attr('visibility', 'visible')
        } catch (g) { }
    }
}
function drp_ev() {
    if (drp_dl == 0) {
        return false
    }
    var d = new Date().getTime() > drp_eC + drp_dl * 1000 && drp_eD
    return (
        !drp_eE &&
        d &&
        (console.error(
            '\u300C破盾模式\u300D已临时关闭\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
        ),
            (drp_eE = true)),
        d
    )
}
function drp_ew() {
    if (drp_dm == 0) {
        return false
    }
    var d = new Date().getTime() > drp_eC + drp_dm * 1000 && drp_eD
    return (
        !drp_eF &&
        d &&
        (console.error(
            '\u300C特殊刷回流模式\u300D已临时关闭\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
        ),
            (drp_eF = true)),
        d
    )
}
var drp_ex = false,
    drp_ey = false,
    drp_ez = 0,
    drp_eA = false,
    drp_eB = false,
    drp_eC = new Date().getTime() + 86400000,
    drp_eD = false,
    drp_eE = false,
    drp_eF = false,
    drp_eG = 0,
    drp_eH = 0,
    drp_eI = 0,
    drp_eJ = 150,
    drp_eK = false,
    drp_eL = 0,
    drp_eM = null,
    drp_eN = null,
    drp_eO = null,
    drp_eP = null,
    drp_eQ = null,
    drp_eR = null,
    drp_eS = false
function drp_eT() {
    while (true) {
        if (drp_cQ == 0) {
            drp_ex = false
            drp_ey = false
            r = false
            drp_eG = 0
            drp_d3 = 0
            drp_d6 = 0
            drp_ez = 0
            drp_eH = 0
            drp_eI = 0
            drp_eK = false
            drp_eL = 0
            drp_eB = false
            drp_eS = false
            drp_eC = new Date().getTime() + 86400000
            drp_eD = false
                ; (drp_eE || drp_eF) &&
                    console.error(
                        '已经解除\u300C破盾模式\u300D和\u300C特殊刷回流模式\u300D的临时关闭状态'
                    )
            drp_eE = false
            drp_eF = false
            drp_eR = null
            sleep(100)
            continue
        }
        sleep(50)
        drp_eQ = drp_e0()
        if (!drp_eQ) {
            drp_cm && log('Cannot find webview parent node.')
            continue
        }
        var b = drp_e8(drp_eQ)
        if (!b) {
            if (drp_cm) {
                log('Cannot find current node.')
            }
            continue
        }
        drp_dt * 2 > 500 && drp_c0()
        var c = drp_dZ(b),
            d = drp_ea(b)
        if (!d) {
            drp_cm && log('Cannot find current webview.')
            continue
        }
        drp_eM = drp_eb(c, d)
        drp_cm && log('Header: ' + drp_eM.header + ', Status: ' + drp_eM.status)
        switch (drp_eM.status) {
            case 'presale':
                var f = drp_ee(d)
                if (f && f.text().startsWith('距离开售时间还剩')) {
                    var g = f.text().slice(-5)
                    if (g.endsWith('0')) {
                        log('距离开售还剩: ' + g)
                    } else {
                        if (g.startsWith('00:')) {
                            var h = parseInt(g.split(':')[1])
                            if (h < 10) {
                                console.error('距离开售还剩: ' + g)
                            } else {
                                h % 10 == 0 && console.error('距离开售还剩: ' + g)
                            }
                        }
                    }
                }
                break
            case 'keep_waiting':
                log('继续等待按钮出现\uFF0C执行点击')
                var j = d.findOne(textStartsWith('继续等待').algorithm('DFS'))
                j && (j.click(), sleep(100))
                break
            case 'preorder':
                var k = d.findOne(text('就是这家').algorithm('DFS'))
                if (k) {
                    k.click()
                    break
                }
                var l = d.findOne(text('参与抢购').algorithm('DFS'))
                if (l) {
                    log('参与抢购按钮出现\uFF0C执行点击')
                    l.click()
                    break
                }
                if (drp_eB) {
                    break
                }
                var m = d.findOne(text('购买方式').algorithm('DFS'))
                if (!m) {
                    break
                }
                log('当前可以选择购买方式')
                var n = d.findOne(text(drp_cR).algorithm('DFS'))
                if (n) {
                    n.click()
                }
                log('已选择购买方式\uFF1A' + drp_cR)
                var o = d.findOne(text('选择规格').algorithm('DFS'))
                if (o) {
                    log('当前可以选择规格')
                    var p = d.findOne(textStartsWith(drp_cT).algorithm('DFS'))
                    if (p) {
                        p.click()
                    }
                    log('已选择规格\uFF1A' + drp_cT)
                    sleep(100 + drp_cV)
                }
                if (drp_cS > 1) {
                    var q = d.findOne(text('数量').algorithm('DFS'))
                    q && (drp_ed(d, drp_cS), log('已满足购买数量要求: ', drp_cS))
                } else {
                    log('目标购买数量为1\uFF0C跳过购买数量判断')
                }
                drp_eB = true
                break
            case 'confirm_and_pay':
                drp_dr && (drp_eS = false)
                !drp_eD &&
                    ((drp_eC = new Date().getTime()),
                        (drp_eD = true),
                        drp_dk &&
                        drp_dl > 0 &&
                        console.error(
                            '脚本将在[',
                            drp_dl,
                            ']秒后临时关闭\u300C破盾模式\u300D\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
                        ),
                        drp_db &&
                        drp_dm > 0 &&
                        console.error(
                            '脚本将在[',
                            drp_dm,
                            ']秒后临时关闭\u300C特殊刷回流模式\u300D\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
                        ))
                drp_eI = 0
                var r = false
                drp_ex = true
                if (!d) {
                    if (drp_cm) {
                        log('Cannot find current webview.')
                    }
                    sleep(10)
                    break
                }
                ; (drp_eN = null), (drp_eO = null), (drp_eP = null)
                var s = d.childCount()
                for (var t = s - 1; t >= 0; t--) {
                    try {
                        var u = d.child(t)
                    } catch (ap) {
                        break
                    }
                    if (!u) {
                        break
                    }
                    if (u.className() === 'android.view.View') {
                        if (!drp_eN) {
                            drp_eN = u
                        } else {
                            if (!drp_eO) {
                                drp_eO = u
                            } else {
                                if (!drp_eP) {
                                    drp_eP = u
                                    break
                                }
                            }
                        }
                    }
                }
                if (!drp_eN) {
                    drp_cm && log('Cannot find last view.')
                    sleep(10)
                    break
                }
                if (!drp_dk || drp_ev()) {
                    var v = null
                    if (!drp_eN) {
                        break
                    }
                    var z = drp_eN.child(drp_eN.childCount() - 1)
                    z && z.text() === '确认信息并支付' && (v = z)
                    if (v) {
                        drp_eG = 0
                        drp_eH++
                        drp_eH >= 7
                            ? (drp_e2(),
                                drp_cm && console.error('clicked confirm_btn (physical click)'),
                                console.error(
                                    '多次尝试点击\u300C确认信息并支付\u300D失败\uFF0C使用后备方案\u3002'
                                ))
                            : (v.click(),
                                drp_e3(v),
                                drp_cm && console.error('clicked confirm_btn'))
                        sleep(drp_cV)
                        break
                    }
                    var A = null
                    if (drp_eN.childCount() == 2) {
                        var B = drp_eN.child(1)
                        if (B && B.className() === 'android.view.View') {
                            if (B.childCount() == 1) {
                                var C = B.child(0)
                                C &&
                                    C.className() === 'android.view.View' &&
                                    (A = C.child(C.childCount() - 1))
                            }
                        }
                    }
                    if (A) {
                        drp_eH = 0
                        if (drp_eG == 0) {
                            drp_d3 = new Date().getTime()
                            A.click()
                            drp_cm && console.error('clicked double_confirm')
                            drp_ey = true
                            drp_eG++
                            sleep(250 + drp_cV)
                        } else {
                            drp_eG >= 8
                                ? (drp_e1(A),
                                    drp_cm &&
                                    console.error('clicked double_confirm (clickButton)'),
                                    (drp_ey = true),
                                    (drp_eG = 0))
                                : (drp_eG++, sleep(20))
                        }
                        break
                    }
                }
                if (drp_db && !drp_ew()) {
                    var F = d.findOne(text('我知道了').algorithm('DFS'))
                } else {
                    var C = drp_ei(drp_eN)
                    if (!C) {
                        break
                    }
                    if (C.childCount() != 2) {
                        break
                    }
                    var G = C.child(0),
                        F = C.child(1)
                }
                if (F) {
                    if (!drp_db || drp_ew()) {
                        G && console.log(G.text())
                        drp_eG = 0
                        F.click()
                        drp_cm && console.error('clicked acknowledge')
                        sleep(100 + drp_cV + drp_cX)
                    } else {
                        if (!drp_dk || drp_ev()) {
                            var J = d.findOne(
                                textMatches(/(确认无误|就是这家)/).algorithm('DFS')
                            )
                            if (J) {
                                if (drp_eG == 0) {
                                    drp_d3 = new Date().getTime()
                                    J.click()
                                    drp_ey = true
                                    drp_eG++
                                    sleep(drp_d2)
                                    break
                                }
                            }
                            var K = d.findOne(text('确认信息并支付').algorithm('DFS'))
                            if (K) {
                                drp_eG = 0
                                drp_eH++
                                if (drp_eH >= 7) {
                                    drp_e2()
                                } else {
                                    K.click()
                                    sleep(drp_d2)
                                    drp_ey = false
                                    break
                                }
                            }
                        }
                    }
                    drp_ey = false
                    break
                }
                break
            case 'info_page':
                ; (drp_eS = false), (drp_ey = false), (r = false), (drp_eH = 0)
                var v = drp_eg(d)
                if (!drp_ex) {
                    sleep(300)
                    if (!v) {
                        var L = d.findOne(text('立即购买').algorithm('DFS'))
                        L && L.click()
                        sleep(400)
                    }
                } else {
                    !v && (drp_ex = false)
                    sleep(150)
                }
                break
            case 'purchase':
                if (r) {
                    r = false
                    break
                }
                ; (drp_ey = false), (drp_eG = 0)
                if (!drp_ex) {
                    var m = d.findOne(text('购买方式').algorithm('DFS'))
                    if (m) {
                        if (!drp_cR.startsWith('来回刷')) {
                            log('当前可以选择购买方式')
                            var n = d.findOne(text(drp_cR).algorithm('DFS'))
                            n && n.click()
                            log('已选择购买方式\uFF1A' + drp_cR)
                            sleep(50)
                        }
                    }
                    var o = d.findOne(text('选择规格').algorithm('DFS'))
                    if (o) {
                        log('当前可以选择规格')
                        var p = d.findOne(textStartsWith(drp_cT).algorithm('DFS'))
                        p && p.click()
                        log('已选择规格\uFF1A' + drp_cT)
                        sleep(100 + drp_cV)
                    }
                    if (m && drp_dh && drp_dh.trim() !== '') {
                        var M = m.parent()
                        if (M) {
                            var N = drp_dh
                                .replace(/｜/g, '|')
                                .split('|')
                                .map(function (aG) {
                                    return aG.trim()
                                })
                                .filter(function (aG) {
                                    return aG.length > 0
                                })
                                .map(function (aG) {
                                    return '.*' + aG.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '.*'
                                })
                            if (N.length > 0) {
                                var O = N.join('|')
                                console.info('\uD83D\uDD0D 使用额外选择规则: ', drp_dh)
                                var P = M.find(textMatches(O).algorithm('BFS'))
                                if (P) {
                                    for (var t = 0; t < P.length; t++) {
                                        var Q = P[t]
                                        if (Q) {
                                            Q.click()
                                            console.error('已点击额外选择: ', Q.text())
                                            sleep(10)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    drp_cY && drp_dT()
                    var v = drp_eg(d)
                    if (!drp_dr) {
                        drp_eR = new Date()
                    } else {
                        if (!drp_eS) {
                            drp_eR = new Date()
                            drp_eS = true
                        }
                    }
                    var R = '到店取'
                    while (!v && !drp_ex) {
                        if (drp_cW > 0) {
                            var S = new Date()
                            if (S - drp_eR > 60000 * drp_cW) {
                                drp_cQ = 0
                                ui.post(() => {
                                    if (!drp_dd) {
                                        drp_dJ.end.attr('visibility', 'gone')
                                        drp_dJ.start.attr('visibility', 'visible')
                                    } else {
                                        drp_dJ.text_status.setText('启动')
                                        try {
                                            drp_dJ.drag.attr('tint', '#66ccff')
                                        } catch (aL) {
                                            console.error('Failed to set image tint:', aL)
                                        }
                                    }
                                })
                                var h = parseFloat((drp_cW * 60).toFixed(2))
                                console.warn(
                                    '[通知] 超过设定的库存最大连续刷新时长[',
                                    drp_cW,
                                    ']分钟(',
                                    h,
                                    '秒) ',
                                    '\uFF0C脚本已停止'
                                )
                            }
                        }
                        if (drp_cQ == 0) {
                            drp_ex = false
                            drp_ey = false
                            drp_eG = 0
                            break
                        }
                        var T = new Date().getTime(),
                            L = d.findOne(text('立即购买').algorithm('DFS'))
                        if (L) {
                            v = drp_eg(d)
                            if (v) {
                                break
                            }
                            if (!drp_df) {
                                var U = drp_eh(d),
                                    V = 0,
                                    W = false,
                                    X = new Date().getTime(),
                                    Y = X - drp_d4
                                Y > Math.max(drp_cU, 300) &&
                                    console.error('正在判断库存情况...')
                                while (!U) {
                                    V++
                                    if (V > 30) {
                                        W = true
                                        sleep(20)
                                        break
                                    }
                                    U = drp_eh(d)
                                    if (U) {
                                        break
                                    }
                                    if (drp_cY && drp_de) {
                                        drp_dT()
                                    }
                                    sleep(20)
                                    v = drp_eg(d)
                                    if (v) {
                                        break
                                    }
                                    if (drp_cQ == 0) {
                                        drp_ex = false
                                        drp_ey = false
                                        drp_eG = 0
                                        break
                                    }
                                }
                                var X = new Date().getTime(),
                                    Y = X - drp_d4
                                if (Y > Math.max(drp_cU, 300)) {
                                    if (U) {
                                        console.warn('已售罄')
                                    } else {
                                        v && console.warn('有库存')
                                    }
                                }
                                if (W || U) {
                                    drp_cr && drp_ec(d)
                                    if (!drp_cR.startsWith('来回刷')) {
                                        if (!drp_ex) {
                                            var X = new Date().getTime(),
                                                Y = X - drp_d4
                                            if (Y < Math.max(drp_cU, 300)) {
                                                continue
                                            }
                                            if (drp_dr) {
                                                var Z = drp_dQ(d)
                                                if (Z) {
                                                    Z.click()
                                                    var a3 =
                                                        Math.floor(Math.random() * (drp_d0 - drp_cZ + 1)) +
                                                        drp_cZ
                                                    !drp_da && (a3 = 0)
                                                    var a2 = drp_cU + a3
                                                    sleep(Math.max(a2 / 4, 100))
                                                }
                                            }
                                            drp_d4 = X
                                            L.click()
                                            drp_dr && sleep(Math.max(a2 / 4, 100))
                                        }
                                    } else {
                                        if (drp_cR == '来回刷') {
                                            var a4 = d.findOne(text(R).algorithm('DFS'))
                                            if (a4) {
                                                if (drp_cm) {
                                                    console.error('clicked current_selection_btn: ', R)
                                                }
                                                a4.click()
                                                R == '到店取' ? (R = '送到家') : (R = '到店取')
                                                sleep(100)
                                            }
                                        } else {
                                            var a5 = '送到家',
                                                R = '到店取'
                                            drp_cR == '来回刷\uFF08送到家\uFF09' &&
                                                ((a5 = '到店取'), (R = '送到家'))
                                            var a4 = d.findOne(text(a5).algorithm('DFS'))
                                            if (a4) {
                                                a4.click()
                                                sleep(300)
                                                a4 = d.findOne(text(R).algorithm('DFS'))
                                                a4 && (a4.click(), sleep(100))
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (
                                    drp_cR != '来回刷' &&
                                    drp_cR != '来回刷\uFF08到店取\uFF09' &&
                                    drp_cR != '来回刷\uFF08送到家\uFF09'
                                ) {
                                    !drp_ex && L.click()
                                } else {
                                    if (drp_cR == '来回刷') {
                                        var a4 = d.findOne(text(R).algorithm('DFS'))
                                        a4 &&
                                            (drp_cm &&
                                                console.error('clicked current_selection_btn: ', R),
                                                a4.click(),
                                                R == '到店取' ? (R = '送到家') : (R = '到店取'),
                                                sleep(100))
                                    } else {
                                        var a5 = '送到家',
                                            R = '到店取'
                                        drp_cR == '来回刷\uFF08送到家\uFF09' &&
                                            ((a5 = '到店取'), (R = '送到家'))
                                        var a4 = d.findOne(text(a5).algorithm('DFS'))
                                        a4 &&
                                            (a4.click(),
                                                sleep(300),
                                                (a4 = d.findOne(text(R).algorithm('DFS'))),
                                                a4 && (a4.click(), sleep(100)))
                                    }
                                }
                            }
                        }
                        v = drp_eg(d)
                        if (v) {
                            drp_cm && console.error('confirm_btn found in purchase, break')
                            break
                        }
                        var a6 = Math.floor(Math.random() * (drp_d0 - drp_cZ + 1)) + drp_cZ
                        if (!drp_da) {
                            a6 = 0
                        }
                        var a7 = drp_cU + a6
                        drp_dr && (a7 = a7 / 2)
                        var a8 = Date.now(),
                            a9 = false
                        while (Date.now() - a8 < a7) {
                            sleep(50)
                            v = drp_eg(d)
                            if (v) {
                                a9 = true
                                break
                            }
                        }
                        if (a9) {
                            break
                        }
                        v = drp_eg(d)
                        if (v) {
                            break
                        }
                        purchase_count_label = d.findOne(text('数量').algorithm('DFS'))
                        if (!purchase_count_label) {
                            break
                        }
                        console.info('[注意] 库存刷新耗时: ', drp_cU + a6, 'ms')
                        v = drp_eg(d)
                        if (v) {
                            if (drp_cm) {
                                console.error('confirm_btn found in purchase, break')
                            }
                            break
                        }
                        if (drp_dr) {
                            break
                        }
                    }
                    if (drp_cQ == 0) {
                        continue
                    }
                    if (drp_cS > 1) {
                        var q = d.findOne(text('数量').algorithm('DFS'))
                        q && (drp_ed(d, drp_cS), log('已满足购买数量要求: ', drp_cS))
                    } else {
                        log('目标购买数量为1\uFF0C跳过购买数量判断')
                    }
                }
                v = drp_eg(d)
                if (v) {
                    if (drp_cm) {
                        console.error('confirm_btn found in purchase, try to click')
                    }
                    drp_ez = 0
                    if (drp_db) {
                        if (!drp_ex) {
                            var X = new Date().getTime(),
                                aa = X - drp_d6
                            if (aa >= 200) {
                                drp_d6 = X
                                v.click()
                                drp_ex = true
                                r = true
                                sleep(150 + drp_cV)
                                continue
                            }
                        }
                        var X = new Date().getTime(),
                            aa = X - drp_d3
                        if (aa >= drp_d8) {
                            console.warn(
                                '[等待] 确认按钮点击时间已超过',
                                drp_d8,
                                'ms\uFF0C点击确认'
                            )
                            if (drp_eI >= 2) {
                                drp_e1(v)
                                drp_eI = 0
                                if (drp_cm) {
                                    console.error('clicked confirm_btn (physical click)')
                                }
                            } else {
                                var X = new Date().getTime(),
                                    aa = X - drp_d6
                                aa >= 200 && ((drp_d6 = X), v.click())
                                drp_eI++
                            }
                            drp_ex = true
                            r = true
                        } else {
                            console.warn(
                                '[等待] 为防止反复被打回\uFF0C 等待',
                                drp_d8 - aa,
                                'ms后点击确认'
                            )
                            sleep(drp_d8 - aa)
                            if (drp_eI >= 3) {
                                drp_e1(v)
                                drp_eI = 0
                                drp_cm && console.error('clicked confirm_btn (physical click)')
                            } else {
                                var X = new Date().getTime(),
                                    aa = X - drp_d6
                                aa >= 200 && ((drp_d6 = X), v.click())
                                drp_eI++
                            }
                            drp_ex = true
                            r = true
                        }
                    } else {
                        var X = new Date().getTime(),
                            aa = X - drp_d6
                        aa >= 200 &&
                            (drp_eI >= 3
                                ? (drp_e1(v),
                                    (drp_eI = 0),
                                    drp_cm &&
                                    console.error('clicked confirm_btn (physical click)'))
                                : ((drp_d6 = X),
                                    drp_cm && console.error('clicked confirm_btn)'),
                                    !drp_ex && drp_dg ? drp_e1(v) : v.click(),
                                    drp_eI++),
                                (drp_ex = true),
                                (r = true))
                        drp_ex = true
                        r = true
                    }
                    sleep(150 + drp_cV)
                } else {
                    drp_ez++
                    if (drp_ez >= 10) {
                        drp_ez = 0
                        drp_ex = false
                        drp_ey = false
                        drp_eG = 0
                        r = false
                        sleep(20)
                        break
                    }
                }
                break
            case 'purchase_ready':
                var v = drp_eg(d)
                v && v.click()
                sleep(200)
                break
            default:
                break
        }
    }
}
var drp_eU = threads.start(function () {
    drp_eT()
})
events.on('exit', function () {
    drp_dn && device.cancelKeepingAwake()
    console.hide()
})
setInterval(() => { }, 10000)

