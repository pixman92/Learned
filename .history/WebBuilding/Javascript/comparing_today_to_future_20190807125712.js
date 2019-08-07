// code that makes a date and compares it

var timestamp = new Date().getTime() + (30 * 24 * 60 * 60 * 1000)
//                                      day hour  min  sec  msec

if (timestamp > selectedTimestamp) {
    // The selected time is less than 30 days from now
}
else if (timestamp < selectedTimestamp) {
    // The selected time is more than 30 days from now
}
else {
    // -Exact- same timestamps.
}