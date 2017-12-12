#! /bin/bash

BLOCKID=`/usr/local/bin/ROIcoin-cli getblockcount`
NETSPEED=`/usr/local/bin/ROIcoin-cli getnetworkhashps 100 $BLOCKID`

echo -n "var hashData = ["
for x in $(seq 100 100 $BLOCKID); do 
  SPEED=`/usr/local/bin/ROIcoin-cli getnetworkhashps 100 $x`
  echo -n "[$x,$SPEED],"
done
echo "[$BLOCKID,$NETSPEED]]"
