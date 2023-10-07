In a world of relentless technological advancement, one innovation has stood out, promising to redefine the way we transact, share information, and trust in a digital age.
Blockchain a `Distributed Immutable Ledger`.

Internet has given as everything i.e fast communication and all but failed to provide one thing i.e `trust` which is provided by blockchain.

## Distributed Immutable Ledger
Lets understand this term with an Example -
Suppose assume you went to a shop and then you don't have enough money to purchase so shopkeeper said to give the money later on and wrote your pending money in ledger book (a account book) ,
you purchased for 500 but later on shopkeeper tricked you and changed the amount to 800 , now you dont have any solid proof that you have purchased for 500. here comes Blockchain

Blockchain have many blocks where each block can be identified as a ledger book which cannot be changed ( immutable ). Blockchain follows Distributed System , one ledger book i.e one block of blockchain is stored in multiple servers which . So changing the accounts book ( A block ) is impossible in Blockchain.

## How Block are Stored ?
Blockchain technology does not directly use a linked list data structure, but it shares some similarities with linked lists in terms of how data is structured and connected.

![image](https://github.com/jamAL108/connect/assets/115083239/b6fa7210-66cf-4bfb-91bc-927206a7e79a)

Where Blocks are placed one behind other , Each block Stores previous Blocks Address Whereas in Linked List Each block stores adress of next node .

![Screenshot (98)](https://github.com/jamAL108/connect/assets/115083239/fdadb17d-e1dd-4d86-92f2-e964e0ee40bc)

In Blockchain There are 10000+ of server interconnected , All servers have the same number of block in same sequence .

![Screenshot (99)](https://github.com/jamAL108/connect/assets/115083239/cf7fb250-150c-4e05-a716-64468ce4ea12)

So Whenever a new transaction happens , The servers are informed about this , and they verify whether this is a proper transaction are not , for doing this All server are made to solve a hard mathematical problem , the one who first solves that mathematical problem send the alert msg to its co-servers which are connected to it , after receiving this msg the co-servers verify whether the founder server have solved the problem correct or not and also verify The trasactionss , if both are valid then the block is added into the chain and the server which solved the problem will get a reward.

![image](https://github.com/jamAL108/connect/assets/115083239/df354988-4202-4ba1-b829-13c98b027fe1)

Here Servers are nothing but `High Computing CPU/GPU/ASCII` , they are also called as miners.

## How The Blocks are  Immutable ? Why they can't be changed ?
The address for any block is nothing but a hash value generated using `SHA-256 algorithm` , `It as a 64 Heaxadecimal value each having 4 bit , 64*4 =256 thats whyb it is called as SHA-256`

Each block gets a unique Hash value , each block consist of Block number , transaction , previous hash value , current hash value , noice and timestamps 

![image](https://github.com/jamAL108/connect/assets/115083239/0e1f416f-1e1e-4ab2-9e35-914491ac5e9b)

For simplicity purpose lets understand the concept using Block number , transaction , prev hash and hash value , SHA-256 have a property called avalance effect means whenever a single change happens in a block then the entire hash value for a block gets changed , if the transaction detail is altered by someone then the entire hash value will change completely

check out this site for [practical demonstration of sha-256](https://passwordsgenerator.net/sha256-hash-generator/)

There are multiple servers for blockchain , so hacking all servers and changing the data is impossible but even if one server is hacked and hacker changes a block transaction value then the hash value for that block will get changed due to avalance effect , and due to this the hash value of blocks which lies after the victim block will also get changed as prev hash vlaue has been changed .

During this stage the other server check that their content is not matching with the victim server , so they send a msg to the victim server to change its content , as majority of server opppose this the victim server changes its content and comes back o normal stages

## Different types of Network -
There are two types of Network `centralized` and `decentralized` Network. 
1. Centralized Network

   ![image](https://github.com/jamAL108/connect/assets/115083239/5c98eba1-4d6f-464a-a4fd-bbc4de3c089e)
   
   The cetralized Network is like all data is stored in a single Software/Server and all the HTTP request is fulfilled by 
only one server , in this situation there is no safety assurance if Hacker hacks this single server then its over for the company

2. Decentralized Network -

   ![image](https://github.com/jamAL108/connect/assets/115083239/a25db8ef-e195-4f3d-ae70-23afbd6f4ed2)

   Blockchain follows decentralized network in decentralized network the data is spread across multiple server , where each server holds the same amount and same content of data .
   so even if a hacker hacks a single server then there is no effect on our Software.
   

In conclusion, blockchain technology is a groundbreaking innovation with the potential to reshape industries and enhance security and transparency in various aspects of our lives. From cryptocurrencies like Bitcoin to supply chain management and voting systems, the applications of blockchain are expanding rapidly.We'd love to hear your thoughts and questions about blockchain, so please feel free to share through mails.

