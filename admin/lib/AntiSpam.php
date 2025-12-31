<?php
/**
 * Copyright (C) Vincy - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Vincy <vincy@phppot.com>
 */

class AntiSpam
{

    private $key;

    /**
     * To get a crypting field name that is to be used in honeypot.
     *
     * @return string field name encrypted.
     */
    public function getHoneyPotFieldName()
    {
        $plainSpinner = "icf-spinner";
        if (! empty($_SESSION["icf_spinner"])) {
            $cipherSpinner = $_SESSION["icf_spinner"];
        } else {
            $key = $this->getEncryptKey();
            $cipherSpinner = $this->encrypt($plainSpinner, $key);
            $_SESSION["icf_spinner"] = $cipherSpinner;
        }
        return $cipherSpinner;
    }

    /**
     * A cryptic field name for email field.
     *
     * @return string field name.
     */
    public function getEmailFieldName()
    {
        $plainEmail = "icf-email";
        if (! empty($_SESSION["icf-email"])) {
            $cipherEmail = $_SESSION["icf-email"];
        } else {
            $key = $this->getEncryptKey();
            $cipherEmail = $this->encrypt($plainEmail, $key);
            $_SESSION["icf-email"] = $cipherEmail;
        }
        return $cipherEmail;
    }

    /**
     * A cryptic field name for honey pot field.
     *
     * @return string enctypted fieldname.
     */
    public function getCSRFHoneyPot()
    {
        $key = $this->getEncryptKey();
        $plainText = time();
        $csrfHoneyPot = $this->encrypt($plainText, $key);
        return $csrfHoneyPot;
    }

    /**
     * To get a encryption key using a randome token of 32 digits.
     *
     * @return string encryption key.
     */
    public function getEncryptKey()
    {
        if (empty($this->key)) {
            if (! empty($_SESSION["icf-secret-key"])) {
                $this->key = $_SESSION["icf-secret-key"];
            } else {
                $this->key = $this->getToken(32);
                $_SESSION["icf-secret-key"] = $this->key;
            }
        }
        return $this->key;
    }

    /**
     * To get a random crypto secure text.
     *
     * @param number $length
     *            length required for the generated text.
     * @return string random crypto text.
     */
    public function getToken($length)
    {
        $token = "";
        $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $codeAlphabet .= "abcdefghijklmnopqrstuvwxyz";
        $codeAlphabet .= "0123456789";
        $max = strlen($codeAlphabet) - 1;
        for ($i = 0; $i < $length; $i ++) {
            $token .= $codeAlphabet[$this->cryptoRandSecure(0, $max)];
        }
        return $token;
    }

    /**
     * used for generating random token
     *
     * @param number $min
     * @param number $max
     * @return number
     */
    public function cryptoRandSecure($min, $max)
    {
        $range = $max - $min;
        if ($range < 1) {
            return $min; // not so random...
        }
        $log = ceil(log($range, 2));
        $bytes = (int) ($log / 8) + 1; // length in bytes
        $bits = (int) $log + 1; // length in bits
        $filter = (int) (1 << $bits) - 1; // set all lower bits to 1
        do {
            $rnd = hexdec(bin2hex(openssl_random_pseudo_bytes($bytes)));
            $rnd = $rnd & $filter; // discard irrelevant bits
        } while ($rnd >= $range);
        return $min + $rnd;
    }

    /**
     * $key should be previously generated safely, ie: openssl_random_pseudo_bytes
     * use this only for PHP >5.6 and PHP<7.1.
     * For PHP 7.1+ use aes-gcm ref: http://php.net/manual/en/function.openssl-encrypt.php
     */
    public function encrypt($plaintext, $key)
    {
        $ivlen = openssl_cipher_iv_length($cipher = "AES-128-CBC");
        $iv = openssl_random_pseudo_bytes($ivlen);
        $ciphertext_raw = openssl_encrypt($plaintext, $cipher, $key, $options = OPENSSL_RAW_DATA, $iv);
        $hmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary = true);
        $ciphertext = base64_encode($iv . $hmac . $ciphertext_raw);

        return $ciphertext;
    }

    /**
     * use this in sync with above encrypt function
     * $key should be previously generated safely, ie: openssl_random_pseudo_bytes
     * use this only for PHP >5.6 and PHP<7.1.
     * For PHP 7.1+ use aes-gcm ref: http://php.net/manual/en/function.openssl-encrypt.php
     */
    public function decrypt($ciphertext, $key)
    {
        $c = base64_decode($ciphertext);
        $ivlen = openssl_cipher_iv_length($cipher = "AES-128-CBC");
        $iv = substr($c, 0, $ivlen);
        $hmac = substr($c, $ivlen, $sha2len = 32);
        $ciphertext_raw = substr($c, $ivlen + $sha2len);
        $original_plaintext = openssl_decrypt($ciphertext_raw, $cipher, $key, $options = OPENSSL_RAW_DATA, $iv);

        return $original_plaintext;
    }

    /**
     * to check for successive submissions withing short time intervals like in
     * brute force attack or throttled bot submissions
     */
    public function isBruteForce($formToken)
    {
        $key = $this->getEncryptKey();
        $timestamp = $this->decrypt($formToken, $key);
        $submissionInterval = 3;
        $plainText = time();
        $isValidInterval = ($plainText < ($timestamp + $submissionInterval));
        return $isValidInterval;
    }

    /**
     * handle to cleanup the session
     */
    public function cleanUp()
    {
        unset($_SESSION["icf-secret-key"]);
        unset($_SESSION["icf-email"]);
        unset($_SESSION["icf-spinner"]);
    }
}