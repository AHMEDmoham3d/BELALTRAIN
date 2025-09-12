# TODO List for Kumite Videos Modal Final Reversion

## Completed Tasks
- [x] Revert kumite videos to original stacked display with controls
- [x] Keep other sections showing "coming soon" messages
- [x] Update openResource function to handle kumite separately
- [x] Kumite shows scrollable videos with individual controls
- [x] Other sections show info modal with placeholder messages

## Summary
Successfully reverted kumite section to original display while keeping others as messages. Now:
- Kumite: Shows stacked videos (leg1.mp4, leg2.mp4, leg3.mp4) with controls in scrollable container (max-height: 400px)
- Kata: Shows "سيتم فتح قسم تمارين الكاتا قريباً"
- Kihon: Shows "سيتم فتح قسم أساسيات الكيهون قريباً"
- Rules: Shows "سيتم فتح قسم قواعد البطولات قريباً"
- Videos are not autoplaying and have individual controls
