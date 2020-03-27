wget https://nvd.nist.gov/feeds/json/cve/1.1/nvdcve-1.1-recent.json.zip
echo 'Got the download!'
unzip nvdcve-1.1-recent.json.zip
echo 'Unzipped the file!'
bash /root/split.sh nvdcve-1.1-recent.json
bash /root/split.sh CVE_Items.json
rm -rf CVE_* nvdcve-1.1-recent.json.zip nvdcve-1.1-recent.json
mv *.json /var/www/html/json
echo 'Done!'
