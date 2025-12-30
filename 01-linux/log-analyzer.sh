#!/bin/bash
# --------------------------------------------
# Script Name : log_analysis.sh
# Purpose     : Analyze log file and generate report
# Usage       : ./log_analysis.sh <log_file>
# --------------------------------------------

set -e  # Exit immediately if any command fails

# Check if file argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <log_file>"
    exit 1
fi

LOG_FILE="$1"

# Check if file exists
if [ -f "$LOG_FILE" ]; then
    echo "File exists in the system"
    echo "And executing file"
    echo "=========================================="

    echo "========== LOG ANALYSIS REPORT =========="
    echo "File           : $(realpath "$LOG_FILE")"
    echo "Total lines    : $(wc -l < "$LOG_FILE")"
    echo "-----------------------------------------"
    echo "INFO count     : $(grep -c "INFO" "$LOG_FILE")"
    echo "WARNING count  : $(grep -c "WARNING" "$LOG_FILE")"
    echo "ERROR count    : $(grep -c "ERROR" "$LOG_FILE")"
    echo "-----------------------------------------"

    IP_LIST=$(grep -oE '[0-9]{1,3}(\.[0-9]{1,3}){3}' "$LOG_FILE" | sort | uniq)
    echo "IP Addresses   :"
    echo "$IP_LIST"

    echo "========================================="

else
    echo "File does not exist"
    exit 1
fi
echo "Script execution completed."
