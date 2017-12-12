#! /bin/bash

TOTBLOCKS=`/usr/local/bin/ROIcoin-cli getblockcount`
CBLOCKH=`/usr/local/bin/ROIcoin-cli getblockhash $TOTBLOCKS`
CBLOCKD=`/usr/local/bin/ROIcoin-cli getblock $CBLOCKH | grep diff | awk '{print $3}' | tr -d ','`

echo -n "var diffData = ["
for x in $(seq 100 100 $TOTBLOCKS); do 
  BLOCKH=`/usr/local/bin/ROIcoin-cli getblockhash $x`
  BLOCKD=`/usr/local/bin/ROIcoin-cli getblock $BLOCKH | grep diff | awk '{print $3}' | tr -d ','`
  echo -n "[$x,$BLOCKD],"
done

echo "[$TOTBLOCKS,$CBLOCKD]]"
