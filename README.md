This tutorial should work on previous versions of Ubuntu such as Ubuntu 14.04 / 14.10 / 15.04 / 15.10 and newer versions such as Ubuntu 16.10 / 17.04.

Open Terminal ( Ctrl + Alt + T ).

Remove the OpenJDK from the system, if you have it already installed.

$ sudo apt-get remove --purge openjdk*
Add repository.

$ sudo add-apt-repository -y ppa:webupd8team/java
Run the following command to pull the packages information from the newly added repository.

$ sudo apt-get update
Issue the following command to install Java JDK 8.

$ sudo apt-get -y install oracle-java8-installer
During the installation, you may need to accept the Oracle binary licenses.

Verify Java version

$ java -version
Output:

java version "1.8.0_151"
Java(TM) SE Runtime Environment (build 1.8.0_151-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.151-b12, mixed mode)
That’s All.