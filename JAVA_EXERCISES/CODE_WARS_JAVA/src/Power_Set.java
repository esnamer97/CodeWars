import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Power_Set {

    public static void main(String[] args) {
        String test = "abc";
        List<String> resp = AllPossibleStrings(test);
        int t = 0;
        for(String a : resp){
            System.out.println(t + " : " + a);
            t++;
        }
    }

    public static List<String> AllPossibleStrings(String s){
        List<String> resp = new ArrayList<>();
        long powSize = (long)Math.pow(2, s.length());
        for (int i = 0; i < powSize; i++) {
            StringBuilder set = new StringBuilder();
            for (int j = 0; j < s.length(); j++) {
                if ((i & (1 << j)) > 0){
                    set.append(s.charAt(j));
                    System.out.println(set);
                }
            }
            resp.add(set.toString());
        }
        Collections.sort(resp);
        resp.removeAll(Arrays.asList("", null));
        System.out.println("TEST");
        return resp;
    }

}
