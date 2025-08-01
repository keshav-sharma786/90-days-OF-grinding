#include <iostream>
using namespace std;

int main() {
    int num = 121;
    int number = num;
        int count = 0;
        while(num > 0) {
            // extracting the last digit of num
            int last = num % 10;
            if(number % last == 0) {
                count ++;
            }
            num = num / 10;
        }

        cout << count << endl;
        return 0;
}
