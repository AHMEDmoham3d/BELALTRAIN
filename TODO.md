# TODO List for Kumite Videos Modal Original Regular Modal Reversion

## Completed Tasks
- [x] Revert kumite videos to original regular modal display (not full-screen)
- [x] Fix black modal issue by restoring proper modal structure
- [x] Keep other sections showing "coming soon" messages
- [x] Restore original videos-container with flex layout and gap spacing
- [x] Kumite shows videos in flex container with 10px gap between videos
- [x] Other sections show info modal with placeholder messages

## Summary
Successfully reverted kumite section to original regular modal display while fixing the black modal issue. Now:
- Kumite: Shows stacked videos (leg1.mp4, leg2.mp4, leg3.mp4) with controls in flex container (max-height: 400px, gap: 10px)
- Kata: Shows "سيتم فتح قسم تمارين الكاتا قريباً"
- Kihon: Shows "سيتم فتح قسم أساسيات الكيهون قريباً"
- Rules: Shows "سيتم فتح قسم قواعد البطولات قريباً"
- Videos are not autoplaying and have individual controls
- Modal structure restored to original regular appearance (not full-screen black)
