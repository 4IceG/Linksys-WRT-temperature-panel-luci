# Linksys-WRT-temperature-panel-luci

# Screenshot

![](https://raw.githubusercontent.com/IceG2020/Linksys-WRT-temperature-panel-luci/master/temp.PNG)

"Linksys WRT1900AC"
"Linksys WRT1900ACv2"
"Linksys WRT1900ACS"
"Linksys WRT1200AC"
"Linksys WRT32X"

	TEMPCPU=$(cut -c1-2 /sys/class/hwmon/hwmon2/temp1_input);
 	TEMPMEM=$(cut -c1-2 /sys/class/hwmon/hwmon1/temp1_input);
 	TEMPWIFI=$(cut -c1-2 /sys/class/hwmon/hwmon1/temp2_input);

--------------------------------------------------------------
"Linksys WRT3200ACM"

	TEMPCPU=$(cut -c1-2 /sys/class/hwmon/hwmon1/temp1_input);
	TEMPMEM=$(cut -c1-2 /sys/class/hwmon/hwmon0/temp2_input);
	TEMPWIFI=$(cut -c1-2 /sys/class/hwmon/hwmon0/temp1_input);
