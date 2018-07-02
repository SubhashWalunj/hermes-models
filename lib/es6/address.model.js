export class Address {    
    constructor(line1, line2, city, state, pin) {
        var _line1, _line2, _city, _state, _pin;
        _line1 = line1 || "";
        _line2 = line2 || "";
        _city = city || "";
        _state = state || "";
        _pin = pin || "";
    }
    get line1() {
        return _line1;
    }
    set line1(line1) {
        _line1 = line1;
    }
    get line2() {
        return _line2;
    }
    set line2(line2) {
        _line2 = line2;
    }
    get city() {
        return _city;
    }
    set city(city) {
        _city = city;
    }
    get state() {
        return _state;
    }
    set state(state) {
        _state = state;
    }
    get pin() {
        return _pin;
    }
    set pin(pin) {
        _pin = pin;
    }
    setModel(raw) {
        _line1 = raw.line1 || "";
        _line2 = raw.line2 || "";
        _city = raw.city || "";
        _state = raw.state || "";
        _pin = raw.pin || "";
    }
    getModel() {
        return {
            line1: _line1,
            line2: _line2,
            city: _city,
            state: _state,
            pin: _pin
        }
    }
}