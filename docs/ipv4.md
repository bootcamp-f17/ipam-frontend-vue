# TCP/IP, IP Adresses and Subnetting

## Network & Host Addresses

An IPv4 address is a 32 bit number (in binary notation). To be more readable, we typically use the decimal version of these numbers. For example: 11000000.10101000.01111011.10000100 is the binary notation for 192.168.123.132. Each of these binary sections is known as an octet.

This IP address can be further divided into two parts, the Network address and Host address. Think of the Network address as your street address and the Host address as your house number. For our example above, the Network address would be 192.168.123.0 while the host address would be 0.0.0.132.

```
192.168.123.     =  Network address
           .132  =  Host address
```

For our IPAM application, the Host will be the device that is connected to the network (132 in the above example) and the Network address will be its location (192.168.123.0 above). 

## Subnet Masks

There is a second item that is needed with TCP/IP to make IP addresses functional, and that is the Subnet mask. At the most basic, this is a number that tells whether the host is on the local network or on a remote network. Think of the Subnet mask as a zipcode or city, it tells us whether the street address is local or not, as there can be many "123 Main Street" addresses across the country.

Almost all decimal subnet masks convert to binary numbers that are all ones on the left and all zeros on the right, such as:

```
11111111.11111111.11111111.00000000  =  Subnet mask (255.255.255.0)
```

## Subnetting

The TCP/IP network can be further divided (subnetted) by the system administrator so that the abstract world of IP addresses can be utilized in the real world, with physical networks that already exist.

A system administrator who is allocated a block of IP addresses may be overseeing networks that are not organized in a way that easily fits the provided IP addresses. For example, you have a wide area network with 150 hosts (or devices) on three networks (in different cities) that are connected by a TCP/IP router. Each of these three networks has 50 hosts. You are allocated the class C network 192.168.123.0. This means that you can use the addresses 192.168.123.1 to 192.168.123.254 for your 150 hosts.

Two addresses that cannot be used in this example are 192.168.123.0 and 192.168.123.255 because binary addresses with a host portion of all ones and all zeros are invalid. The zero address (192.168.123.0) is invalid because it already specifies the Network address, while the 255 address (192.168.123.255) is invalid because it is utilized by the network to send messages to ALL of the connected hosts in that Network address.

We can now give IP addresses to 254 hosts, which would be great if all of these hosts were on the same network, but they aren't, they are on 3 seperate physical networks. This is when dividing the allocated IP addresses into subnets becomes useful. In our case, we divide our network into 4 subnets by using a subnet mask that makes the network address larger and the range of host (or device) addresses smaller. The subnet mask 255.255.255.192 gives you four networks of 62 hosts each. This works because in binary notation, 255.255.255.192 is the same as 1111111.11111111.1111111.11000000. The first two digits of the last octet become network addresses, so you get the additional networks 00000000 (0), 01000000 (64), 10000000 (128) and 11000000 (192).

Using this new 255.255.255.192 subnet mask our (now divided) networks will have the following Host addresses available to them:

```
Network 1  =  192.168.123.(1-62)
Network 2  =  192.168.123.(65-126)
Network 3  =  192.168.123.(129-190)
Network 4  =  192.168.123.(193-254)
```

