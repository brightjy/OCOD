#include <stdio.h>
#include <stdlib.h>

// N개의 정수가 주어진다. 이때, N개의 정수를 오름차순으로 정렬하는 프로그램을 작성하시오.
// 같은 정수는 한번만 출력한다.

// 1. 오름차순 정렬, Big-O: O(N*log(N))

// 1-(1) 힙상태 만들기
void makeHeapState ( int *arr, int size )
{
    for ( int i = 1; i < size ; i++ )
    {
        int child = i;
        do
        {
            // 자식 노드가 부모 노드보다 크면 교환
            int root = ( child - 1) / 2;
            if ( arr[root] < arr[child] )
            {
                int temp = arr[root];
                arr[root] = arr[child];
                arr[child] = temp;
            }
            child = root;
        }
        while ( child != 0 );
    }
}

// 1-(2) 루트와 최하단 노드 교체
void heap ( int *arr, int *size)
{
    int temp = arr[0];
    arr[0] = arr[*size - 1];
    arr[*size - 1] = temp;
    --(*size);
}

// 2. 중복제거






int main()
{
    int size = 10;
    int arr[10] = {5,5,7,1,9,3,2,8,1,1};

    for ( int i = 0; i < size; i++ )
    {
        makeHeapState(arr, size);
        heap(arr, &size);
    }



    for ( int i = 0; i < 10; i++ )
    {
        printf("%d", arr[i]);
    }

    return 0;
}
