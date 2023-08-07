
intent('(add|increment by|increase by) $(NUMBER)', p => {
    p.play(`adding ${p.NUMBER.number}`)
    p.play({command: 'increment', value: p.NUMBER.number});
});

intent('(subtract|minus|decrease by|deduct) $(NUMBER)', p => {
    p.play(`subtracting ${p.NUMBER.number}`)
    p.play({command: 'decrement', value: p.NUMBER.number});
});

intent('(reset| reset to|restart from) $(NUMBER)', p => {
    p.play(`reseting to ${p.NUMBER.number}`)
    p.play({command: 'reset', value: p.NUMBER.number});
});

fallback("Sorry I didn't understand your quest, You can use add, deduct or reset commands")

