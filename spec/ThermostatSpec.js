    'use strict';
  describe ('setup', function(){
    var thermostat;
      //set up 
      beforeEach(function() {
        thermostat = new Thermostat();
      });

    describe('Thermostat', function(){
      

      it('starts at 20 degree', function(){
        // expect(thermostat.temprature).toEqual(20);
        expect(thermostat.getCurrentTemperature()).toEqual(20);
      });

      it('increases in temperature with up()', function(){
        thermostat.up()
        expect(thermostat.getCurrentTemperature()).toEqual(21);
      });
      it('decreases in temperature with down()', function(){
        thermostat.down()
        expect(thermostat.getCurrentTemperature()).toEqual(19);
      });

      it('has a minimum of 10 degrees', function(){
        for (var i = 0; i<11; i++){
          thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10);
      });

      it('has power saving mode on by default', function(){
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
      });
      it("can switch PSM off" ,function(){
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
      });
      it("can switch PSM back on ", function(){
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
      });
    });
    describe('when power saving mode is on',function(){
      it('has a max temp of 25', function(){
        // var  thermostat;
        // thermostat = new Thermostat();----I defined it on the top
        for(var i = 0; i < 6; i++){
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
      describe('when power saving mode is off',function(){
        it ("has a maximum temperature of 32 degrees", function(){
          thermostat.switchPowerSavingModeOff();
          for (var i = 0; i<13 ; i++){
            thermostat.up();
          }
          expect(thermostat.getCurrentTemperature()).toEqual(32);
        });
      });
    });
  });