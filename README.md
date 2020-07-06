## Linksys-WRT-temperature-panel-luci

![GitHub All Releases](https://img.shields.io/github/downloads/IceG2020/Linksys-WRT-temperature-panel-luci/total)
![GitHub stars](https://img.shields.io/github/stars/IceG2020/Linksys-WRT-temperature-panel-luci?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/IceG2020/Linksys-WRT-temperature-panel-luci?style=flat-square)

## Screenshots

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
