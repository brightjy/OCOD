#include <stdio.h>

int main(void)
{
    // & : 주소를 알려달라
    // * : 주소로 가달라
    int n = 50;

    // *p 포인터 : p가 가르키는 값은 int 다
    // 주소는 꼭 포인터에 저장해야 한다.
    int *p = &n;
    printf("%i\n", *p);

    char *s = "EMMA";
    printf("%s\n", s);
    printf("EMMA의 주소 : %p\n", s);
    printf("첫 번째 문자의 주소 : %p\n", &s[0]);
    printf("두 번째 문자의 주소 : %p\n", &s[1]);
    printf("세 번째 문자의 주소 : %p\n", &s[2]);

}

