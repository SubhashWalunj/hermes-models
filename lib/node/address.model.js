module.exports = function Address(raw) {
    var _line1, _line2, _city, _state, _pin;
    
    this.line1 = (val) => val ? _line1 = val : _line1;
    this.line2 = (val) => val ? _line2 = val : line2;
    this.city = (val) => val ? _city = val : _city;
    this.state = (val) => val ? _state = val : _state;
    this.pin = (val) => val ? _pin = val : _pin;
    
    this.setModel = (raw) => {
        if (raw) {
            _line1 = raw.line1 || "";
            _line2 = raw.line2 || "";
            _city = raw.city || "";
            _state = raw.state || "";
            _pin = raw.pin || "";
        }
    }
    this.getModel = () => {
        return {
            line1: _line1,
            line2: _line2,
            city: _city,
            state: _state,
            pin: _pin
        }
    }

    // Construct the model by raw
    this.setModel(raw);
}