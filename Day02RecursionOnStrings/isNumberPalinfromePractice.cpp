#include <iostream>
using namespace std;

bool f(int num, int *temp) {
    // base case
    // negative numbers are also being handled here.
    if((num >= 0 && num <= 9) || (num < 0 && num >= -9)) {
        int lastDigitOfTemp = (*temp) % 10;
        (*temp) /= 10;
        // it means there is a single number only
        // And a single number is always a pallindrome
        // so here we will just compare the num with the last digit of temp
        return (num == lastDigitOfTemp);
    }
    bool result = (f(num / 10, temp) && (num % 10) == ((*temp) % 10));
    (*temp) /= 10;
    return result;
}

int main() {
    int num = -121;
    int anotherNum = num;
    int *temp = &num;
    if(f(num, temp) == 1) {
        cout << "yes the given number is a pallindrome number" << endl;
    } else {
        cout << "No, the given number is a pallindrome number" << endl;
    }
    return 0;
}
