#include <iostream>
using namespace std;

void f(int arr[], int idx, int n, int count) {
    // base case
    if(idx == n) {
        // nth idx do'not exist
        // means array is empty
        cout << count << endl;
        return;
    }
    // calculate even odd for the current idx
    if(arr[idx] % 2 == 0) {
        // means current element is even
        // just increase the count
        count ++;
    }
    
    // recursive function call / Assumption
    f(arr, idx + 1, n, count);
    
}

int main()
{
    int arr[] = {2, 3, 5, 8, 10, 19};
    // our task is to find the number of even elements in the above array
    int n = 6;
    int count = 0;
    // function call
    f(arr, 0, n, count);
    return 0;
}
