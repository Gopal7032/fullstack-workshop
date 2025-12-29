 if [ -f  sample.sh ]; then
	echo "File  exits in the system"
	echo "And excuting files "
	echo "=========================================="

        echo "========== LOG ANALYSIS REPORT =========="
        echo "file :" $(realpath sample.sh)
        echo "TOtal lines : " $( wc -l sample.sh)
        echo "-----------------------------------------"
        echo "INFO : " $(grep -c "INFO" sample.sh)
        echo "WARNING : " $(grep -c "WARNING" sample.sh)
        echo "ERROR : " $(grep -c "ERROR" sample.sh)
        echo "-----------------------------------------"
        echo  IP_LIST=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' sample.sh | sort | uniq)
        echo "========================================="
else
        echo "file does't exits "
fi
