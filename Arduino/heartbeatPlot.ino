//basic starter code for prototype, essentially is just being used for now to show the hardware works

int const PULSE_SENSOR_PIN = 0;   // 'S' Signal pin connected to A0

int isLying;
int Signal;                // Store incoming ADC data. Value can range from 0-1024
int Threshold = 330;       // Determine which Signal to "count as lying" and which to ignore.//need to work on calibrating

void setup() {
	pinMode(LED_BUILTIN,OUTPUT);  
	Serial.begin(9600);           // Set comm speed for serial plotter window
}

void loop() {

	Signal = analogRead(PULSE_SENSOR_PIN); // Read the sensor value

	Serial.println(Signal);                // Send the signal value to serial plotter

	if(Signal > Threshold){
    digitalWrite(LED_BUILTIN,HIGH);
    isLying = 1;                        //function will give the value '1' if the heartbeat measured is above 400
	} else {
    digitalWrite(LED_BUILTIN,LOW);
    isLying = 0;                        //function will give the value '0' if the heartbeat mesured is below 400 (not lying)
  }
	delay(300);

}
