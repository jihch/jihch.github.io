import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class TestZip {
    public static void main(String[] args) {
        StringBuffer stringBuffer = new StringBuffer();
        String zipFilename = "F:/2018/201809/20180903/java_output.zip";
        List<String> list = new ArrayList<String>();
        list.add("F:/2018/201809/20180903/test_zip/3a000067dfb840fdb85c169e130eeb4d.jpg");
        list.add("F:/2018/201809/20180903/test_zip/6cdf3ecdbd6c478583ab41f0fd85f272.jpg");
        list.add("F:/2018/201809/20180903/test_zip/544f9c8a1f8e4ad8a13c9854e8e2f77d.jpg");
        for (int i = 0; i < list.size(); i++) {
            stringBuffer.append(list.get(i));
            if (i != list.size() -1) {
                stringBuffer.append(',');
            }
            
        }
        try {
            writeZip(stringBuffer, zipFilename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void writeZip(StringBuffer sb, String zipname) throws IOException {
        String[] files = sb.toString().split(",");
        OutputStream os = new BufferedOutputStream(new FileOutputStream(zipname));
        ZipOutputStream zos = new ZipOutputStream(os);
        byte[] buf = new byte[8192];
        int len;
        for (int i = 0; i < files.length; i++) {
            File file = new File(files[i]);
            if (!file.isFile()) {
                continue;
            }
            ZipEntry ze = new ZipEntry(file.getName());
            zos.putNextEntry(ze);
            BufferedInputStream bis = new BufferedInputStream(new FileInputStream(file));
            while ((len = bis.read(buf)) > 0) {
                zos.write(buf, 0, len);
            }
            zos.closeEntry();
        }
        zos.closeEntry();
        zos.close();
    }
}
